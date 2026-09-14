// Renders the banner ad to PNG files in banner-ad/export/.
//
//   node banner-ad/export.js
//
// Requires Playwright (npm i -g playwright, or npm i playwright). Uses the
// Chromium that Playwright can find; set PLAYWRIGHT_CHROMIUM_PATH to point
// at a specific binary if needed.
//
// Two kinds of output:
//   - the responsive banner from index.html, screenshotted at two widths
//   - the fixed-size ad units from sizes.html, at exact pixels (1x) and 2x

const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const responsive = [
  { name: 'banner-1200x200', width: 1200, scale: 2 },
  { name: 'banner-mobile-400', width: 400, scale: 2 },
];

const fixed = [
  { name: 'banner-728x90', selector: '#unit-leaderboard' },
  { name: 'banner-620x349', selector: '#unit-mobile' },
];

(async () => {
  const outDir = path.join(__dirname, 'export');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined,
  });

  const write = (file) => console.log('wrote', path.relative(process.cwd(), file));

  for (const size of responsive) {
    const page = await browser.newPage({
      viewport: { width: size.width + 48, height: 400 },
      deviceScaleFactor: size.scale,
    });
    await page.goto('file://' + path.join(__dirname, 'index.html'));
    await page.waitForLoadState('networkidle');
    const file = path.join(outDir, `${size.name}.png`);
    await page.locator('#icaew-banner').screenshot({ path: file });
    write(file);
    await page.close();
  }

  for (const scale of [1, 2]) {
    const page = await browser.newPage({
      viewport: { width: 800, height: 600 },
      deviceScaleFactor: scale,
    });
    await page.goto('file://' + path.join(__dirname, 'sizes.html'));
    await page.waitForLoadState('networkidle');
    for (const unit of fixed) {
      const suffix = scale === 1 ? '' : `@${scale}x`;
      const file = path.join(outDir, `${unit.name}${suffix}.png`);
      await page.locator(unit.selector).screenshot({ path: file });
      write(file);
    }
    await page.close();
  }

  await browser.close();
})();
