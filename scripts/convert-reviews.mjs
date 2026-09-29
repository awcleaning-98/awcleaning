import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(rootDir, 'reviews');
const targetDir = path.join(rootDir, 'src', 'assets', 'screenshots');

fs.mkdirSync(targetDir, { recursive: true });
const files = fs.readdirSync(sourceDir).filter((file) => /\.png$/i.test(file)).sort();

for (const [index, file] of files.entries()) {
  const input = path.join(sourceDir, file);
  const output = path.join(targetDir, `customer-review-${String(index + 1).padStart(2, '0')}.webp`);
  const image = sharp(input);
  const metadata = await image.metadata();
  const headerMask = Buffer.from(
    `<svg width="${metadata.width}" height="96" xmlns="http://www.w3.org/2000/svg"><rect x="145" y="0" width="${Math.max(0, metadata.width - 285)}" height="82" fill="#0b141a"/></svg>`
  );

  await image
    .composite([{ input: headerMask, top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toFile(output);

  console.log(`Converted ${file} -> ${path.basename(output)}`);
}
