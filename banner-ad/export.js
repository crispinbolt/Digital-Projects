// Renders the banner ad to PNG files in banner-ad/export/.
//
//   node banner-ad/export.js
//
// Requires Playwright (npm i -g playwright, or npm i playwright). Uses the
// Chromium that Playwright can find; set PLAYWRIGHT_CHROMIUM_PATH to point
// at a specific binary if needed.

const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const sizes = [
  { name: 'banner-1200x200', width: 1200, scale: 2 },
  { name: 'banner-mobile-400', width: 400, scale: 2 },
];

(async () => {
  const outDir = path.join(__dirname, 'export');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined,
  });

  for (const size of sizes) {
    const page = await browser.newPage({
      viewport: { width: size.width + 48, height: 400 },
      deviceScaleFactor: size.scale,
    });
    await page.goto('file://' + path.join(__dirname, 'index.html'));
    await page.waitForLoadState('networkidle');
    const ad = page.locator('#icaew-banner');
    const file = path.join(outDir, `${size.name}.png`);
    await ad.screenshot({ path: file });
    console.log('wrote', path.relative(process.cwd(), file));
    await page.close();
  }

  await browser.close();
})();
