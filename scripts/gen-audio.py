#!/usr/bin/env python3
"""
gen-audio.py — 用 Kokoro-82M 生成每个词的发音 / generate a recording for every word

模型是 Kokoro-82M（Apache 2.0），全程离线跑在本机，生成出来的 mp3 归本项目所有，
不依赖任何在线服务，页面运行时也只播本地文件。
Kokoro-82M (Apache 2.0) runs locally; the mp3s belong to this project and the page
plays them straight from disk — no third-party service at run time.

用法 / Usage:
    node scripts/build.mjs            # 先构建，产出 js/data/*.js（词表来源）
    scripts/gen-audio.sh              # 再生成音频（增量，已有的文件跳过）

    --force            重新生成已有的文件 / regenerate existing files
    --limit=N          只做前 N 个词，用来试跑 / first N words only
    --us=af_heart      美音音色 / American voice
    --uk=bm_george     英音音色 / British voice
    --bitrate=48k      mp3 码率 / mp3 bitrate
    --jobs=8           并行 ffmpeg 数 / parallel encoders
"""
import json, os, re, subprocess, sys, tempfile, time, unicodedata
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS = os.path.join(ROOT, ".models")
DATA = os.path.join(ROOT, "js", "data")
OUT = os.path.join(ROOT, "audio")

argv = sys.argv[1:]
flag = lambda f: f in argv
def opt(name, default):
    for a in argv:
        if a.startswith("--" + name + "="):
            return a.split("=", 1)[1]
    return default

VOICE = {"us": opt("us", "af_heart"), "uk": opt("uk", "bm_george")}
LANG  = {"us": "en-us", "uk": "en-gb"}
BITRATE = opt("bitrate", "48k")
JOBS = int(opt("jobs", "8"))
LIMIT = int(opt("limit", "0"))

# ------------------------- 文件名 / file names -------------------------
# 与 js/app.js 里的 slug() 必须完全一致 / must match slug() in js/app.js
def slug(w):
    s = unicodedata.normalize("NFD", w.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")

# ---------------- 少数词照字面读会错，这里指定念法 ----------------
# A few entries are read wrong letter-by-letter; say them like this instead
SAY_AS_PATH = os.path.join(ROOT, "data", "say-as.json")
SAY_AS = {}
if os.path.exists(SAY_AS_PATH):
    with open(SAY_AS_PATH, encoding="utf-8") as f:
        SAY_AS = json.load(f)

# ------------------------- 词表 / the word list -------------------------
if not os.path.isdir(DATA):
    sys.exit("× 找不到 js/data/ —— 先跑 node scripts/build.mjs")
words = set()
for fn in sorted(os.listdir(DATA)):
    if not fn.endswith(".js"):
        continue
    src = open(os.path.join(DATA, fn), encoding="utf-8").read()
    for m in re.finditer(r'"w":("(?:[^"\\]|\\.)*")', src):
        words.add(json.loads(m.group(1)))
words = sorted(words)
print(f"词表 {len(words)} 个词 / {len(words)} words")

seen = {}
for w in words:
    s = slug(w)
    if s in seen:
        sys.exit(f"× 文件名撞车 / slug collision: {w!r} 与 {seen[s]!r} 都是 {s!r}")
    seen[s] = w

jobs = []
for w in words:
    for acc in ("us", "uk"):
        path = os.path.join(OUT, acc, slug(w) + ".mp3")
        if flag("--force") or not os.path.exists(path):
            jobs.append((w, acc, path))
have = len(words) * 2 - len(jobs)
if LIMIT:
    jobs = jobs[:LIMIT * 2]
print(f"待生成 {len(jobs)} 个 / {len(jobs)} to render  (已有 {have})")
print(f"音色 {VOICE['us']} (美) · {VOICE['uk']} (英)   码率 {BITRATE}")
if not jobs:
    sys.exit(0)

for acc in ("us", "uk"):
    os.makedirs(os.path.join(OUT, acc), exist_ok=True)

# ------------------------- 模型 / the model -------------------------
os.environ.setdefault("ESPEAK_DATA_PATH", "/opt/homebrew/share/espeak-ng-data")
from kokoro_onnx import Kokoro
import soundfile as sf

onnx = os.path.join(MODELS, "kokoro-v1.0.onnx")
voices = os.path.join(MODELS, "voices-v1.0.bin")
for p in (onnx, voices):
    if not os.path.exists(p):
        sys.exit(f"× 缺模型文件 {p} —— 见 README 的下载命令")
kokoro = Kokoro(onnx, voices)

# ---- 压制：掐掉首尾静音、响度归一、单声道 mp3 / trim, normalise, encode ----
def encode(wav_path, out_path):
    subprocess.run([
        "ffmpeg", "-y", "-loglevel", "error", "-i", wav_path,
        "-af",
        "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.02,"
        "areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,"
        "loudnorm=I=-16:TP=-1.5:LRA=11",
        "-ac", "1", "-ar", "24000", "-b:a", BITRATE, out_path,
    ], check=True)
    os.unlink(wav_path)

t0 = time.time()
done = failed = 0
pool = ThreadPoolExecutor(max_workers=JOBS)
pending = []

def drain(keep=JOBS * 2):
    global done, failed
    while len(pending) > keep:
        fut, w = pending.pop(0)
        try:
            fut.result(); done += 1
        except Exception as e:
            failed += 1
            print(f"\n  × 压制失败 {w}: {e}")

for i, (w, acc, path) in enumerate(jobs):
    text = SAY_AS.get(w, w)
    try:
        sig, sr = kokoro.create(text, voice=VOICE[acc], speed=1.0, lang=LANG[acc])
    except Exception as e:
        failed += 1
        print(f"\n  × 合成失败 {w} [{acc}]: {e}")
        continue
    tmp = tempfile.NamedTemporaryFile(suffix=".wav", delete=False)
    tmp.close()
    sf.write(tmp.name, sig, sr)
    pending.append((pool.submit(encode, tmp.name, path), w))
    drain()
    if i % 50 == 0 or i == len(jobs) - 1:
        el = time.time() - t0
        rate = (i + 1) / el if el else 0
        eta = (len(jobs) - i - 1) / rate if rate else 0
        sys.stdout.write(f"\r  {i+1}/{len(jobs)}  {rate:.1f} 个/秒  剩 {eta/60:.1f} 分钟  失败 {failed}   ")
        sys.stdout.flush()

drain(0)
pool.shutdown()
print()

# ------------------------------- 报告 / report -------------------------------
total = 0
for acc in ("us", "uk"):
    d = os.path.join(OUT, acc)
    files = [f for f in os.listdir(d) if f.endswith(".mp3")]
    size = sum(os.path.getsize(os.path.join(d, f)) for f in files)
    total += size
    print(f"{acc}: {len(files)} 个文件, {size/1024/1024:.1f} MB, 平均 {size/max(len(files),1)/1024:.1f} KB")
print(f"合计 {total/1024/1024:.1f} MB   用时 {(time.time()-t0)/60:.1f} 分钟   失败 {failed}")
