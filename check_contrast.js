import { chromium } from 'playwright';

(async () => {
  try {
    const browser = await chromium.launch();
    const routes = ['/', '/about', '/services', '/process', '/contact'];
    const themes = ['light', 'dark'];
    const devices = [
      { name: 'Desktop', width: 1280, height: 800 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Mobile', width: 375, height: 667 }
    ];

    for (const theme of themes) {
      console.log(`\n--- Theme: ${theme.toUpperCase()} ---`);
      for (const device of devices) {
        console.log(`\nDevice: ${device.name} (${device.width}x${device.height})`);
        const context = await browser.newContext({
          viewport: { width: device.width, height: device.height },
          colorScheme: theme
        });
        const page = await context.newPage();

        for (const route of routes) {
          // console.log(`  Route: ${route}`);
          try {
            await page.goto(`http://localhost:8080${route}`, { waitUntil: 'networkidle' });
            
            const result = await page.evaluate(() => {
              const getLuminance = (rgb) => {
                const parts = rgb.match(/\d+/g);
                if (!parts) return 0;
                const [r, g, b] = parts.map(Number).map(v => {
                  v /= 255;
                  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
                });
                return 0.2126 * r + 0.7152 * g + 0.0722 * b;
              };

              const ctas = Array.from(document.querySelectorAll('button, a, span'))
                .filter(el => el.textContent.trim().includes('Request Consultation'));
              
              if (ctas.length === 0) return { route: location.pathname, error: 'CTA not found' };
              
              const results = ctas.map(cta => {
                const style = window.getComputedStyle(cta);
                const bgColor = style.backgroundColor;
                const color = style.color;
                
                const l1 = getLuminance(bgColor);
                const l2 = getLuminance(color);
                const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
                
                return {
                  text: cta.textContent.trim(),
                  bgColor,
                  color,
                  ratio: ratio.toFixed(2),
                  pass: ratio >= 4.5
                };
              });
              
              return { route: location.pathname, ctas: results };
            });
            
            console.log(`    ${JSON.stringify(result)}`);
            
            const overflow = await page.evaluate(() => {
              return document.documentElement.scrollWidth > window.innerWidth;
            });
            if (overflow) console.log(`    WARNING: Horizontal overflow detected on ${route}!`);

          } catch (e) {
            console.log(`    Error on ${route}: ${e.message}`);
          }
        }
        await context.close();
      }
    }
    await browser.close();
  } catch (err) {
    console.error("Playwright failed:", err.message);
  }
})();
