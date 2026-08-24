import { chromium } from 'playwright';

async function runQA() {
  const browser = await chromium.launch();
  const contexts = [
    { name: 'Desktop', width: 1280, height: 800 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 667 }
  ];
  const routes = ['/', '/about', '/services', '/process', '/contact'];
  const themes = ['light', 'dark'];

  const results = [];

  for (const theme of themes) {
    for (const ctxInfo of contexts) {
      const context = await browser.newContext({
        viewport: { width: ctxInfo.width, height: ctxInfo.height },
        colorScheme: theme
      });
      const page = await context.newPage();
      
      const consoleErrors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });
      page.on('pageerror', err => {
        consoleErrors.push(err.message);
      });

      for (const route of routes) {
        const url = `http://localhost:8080${route}`;
        try {
          await page.goto(url, { waitUntil: 'networkidle' });
          
          // Check for CTA contrast failure
          const ctaContrast = await page.evaluate(() => {
            const ctas = Array.from(document.querySelectorAll('button, a')).filter(el => el.textContent.includes('Request Consultation'));
            if (ctas.length === 0) return 'Not Found';
            
            const cta = ctas[0];
            const style = window.getComputedStyle(cta);
            const bgColor = style.backgroundColor;
            const color = style.color;
            
            // Helper to calculate contrast (simplified)
            function getLuminance(rgb) {
              const [r, g, b] = rgb.match(/\d+/g).map(Number).map(v => {
                v /= 255;
                return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
              });
              return 0.2126 * r + 0.7152 * g + 0.0722 * b;
            }
            
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

          // Check for overflow
          const overflow = await page.evaluate(() => {
            return document.documentElement.scrollWidth > window.innerWidth;
          });

          results.push({
            route,
            theme,
            device: ctxInfo.name,
            ctaContrast,
            overflow,
            errors: [...consoleErrors]
          });
          
          // Clear errors for next route
          consoleErrors.length = 0;
        } catch (e) {
          results.push({
            route,
            theme,
            device: ctxInfo.name,
            error: e.message
          });
        }
      }
      await context.close();
    }
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

runQA();
