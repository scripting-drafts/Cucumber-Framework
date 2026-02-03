import fs from 'fs';
import path from 'path';

const featuresDir = path.join(process.cwd(), 'features');
const isFeatureFile = (p) => p.endsWith('.feature');

function findFeatureFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...findFeatureFiles(full));
    else if (isFeatureFile(full)) files.push(full);
  }
  return files;
}

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const violations = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*#/.test(line)) {
      violations.push({ line: i + 1, text: line });
    }
  }
  return violations;
}

function main() {
  if (!fs.existsSync(featuresDir)) {
    console.error('features directory not found');
    process.exit(1);
  }

  const files = findFeatureFiles(featuresDir);
  let total = 0;
  for (const f of files) {
    const v = checkFile(f);
    if (v.length) {
      console.error(`\nDisallowed comments in: ${path.relative(process.cwd(), f)}`);
      for (const { line, text } of v) {
        console.error(`  ${line}: ${text}`);
      }
      total += v.length;
    }
  }

  if (total > 0) {
    console.error(`\nFound ${total} comment violation(s). Remove '#' comments from .feature files.`);
    process.exit(1);
  }
}

main();
