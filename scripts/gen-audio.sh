#!/usr/bin/env bash
# 生成发音 / render the pronunciations — 见 scripts/gen-audio.py 的注释
# 参数原样透传 / all flags are passed straight through
set -e
cd "$(dirname "$0")/.."
[ -d .venv-tts ] || { echo "× 没有 .venv-tts —— 见 README「发音生成」一节"; exit 1; }
[ -f .models/kokoro-v1.0.onnx ] || { echo "× 没有 .models/kokoro-v1.0.onnx —— 见 README「发音生成」一节"; exit 1; }
export ESPEAK_DATA_PATH="${ESPEAK_DATA_PATH:-/opt/homebrew/share/espeak-ng-data}"
exec .venv-tts/bin/python scripts/gen-audio.py "$@"
