// This script records an alien tourist critique of human hot beverage preparation rituals.
// The punch lands on 'unhinged beverage engineering' to reframe an ordinary morning habit into absurd machinery.
const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const f = require('fs');
const p = require('path');
if (!f.existsSync(dir)) {
  f.mkdirSync(dir, { recursive: true });
}
// Omitting trailing newline because the character gate counts exact characters without extra whitespace or line breaks.
f.writeFileSync(p.join(dir, 'entry.txt'), 'They trap hot leaves in colored water, blow on it furiously for three minutes, and call it a morning ritual; two out of ten, unhinged beverage engineering.', 'utf8');
