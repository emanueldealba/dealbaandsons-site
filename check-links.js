const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const htmlFiles = [];

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const p = path.join(dir, item);
    const stat = fs.statSync(p);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') walk(p);
    if (stat.isFile() && item.endsWith('.html')) htmlFiles.push(p);
  }
}

walk(root);
let broken = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const links = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map(m => m[1].split('#')[0].split('?')[0]);
  for (const link of links) {
    if (!link || link.startsWith('//')) continue;
    const target = path.join(root, link);
    const altHtml = path.join(root, link, 'index.html');
    if (!fs.existsSync(target) && !fs.existsSync(altHtml)) broken.push(`${path.relative(root, file)} -> ${link}`);
  }
}

if (broken.length) {
  console.error('Broken internal links:\n' + broken.join('\n'));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files. No broken internal links.`);
