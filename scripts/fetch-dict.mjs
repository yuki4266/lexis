/*
 * 下载 ECDICT 词典（MIT 协议）到 vendor/ecdict.csv
 * Download the ECDICT dictionary (MIT licensed) into vendor/ecdict.csv
 *   node scripts/fetch-dict.mjs [--force]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEST = path.join(ROOT, 'vendor', 'ecdict.csv');
const URL_ = 'https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv';

if (fs.existsSync(DEST) && !process.argv.includes('--force')) {
  console.log('已存在，跳过 / already present:', DEST,
              '(' + (fs.statSync(DEST).size / 1048576).toFixed(1) + ' MB)');
  process.exit(0);
}

fs.mkdirSync(path.dirname(DEST), { recursive: true });
console.log('下载中 / downloading', URL_);
const res = await fetch(URL_);
if (!res.ok) { console.error('下载失败 / failed:', res.status); process.exit(1); }
fs.writeFileSync(DEST, Buffer.from(await res.arrayBuffer()));
console.log('完成 / done:', DEST, '(' + (fs.statSync(DEST).size / 1048576).toFixed(1) + ' MB)');
