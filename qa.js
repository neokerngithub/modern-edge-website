import { chromium } from 'playwright';

async function checkPage(url, theme, viewport) {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport,
    colorScheme: theme
  });
  const page = await context.newPage();
  
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => { errors.push(err.message); });

  await page.goto(url, { waitUntil: 'networkidle' });

  const data = await page.evaluate(() => {
    const getLuminance = (rgb) => {
      const parts = rgb.match(/\d+/g);
      if (!parts) return 0;
      const [r, g, b] = parts.map(Number).map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const getContrast = (c1, c2) => {
      const l1 = getLuminance(c1);
      const l2 = getLuminance(c2);
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    };

    const ctas = Array.from(document.querySelectorAll('*')).filter(el => 
      el.textContent.trim().includes('Request Consultation') && 
      el.children.length < 5 // Avoid large containers
    );

    const ctaResults = ctas.map(el => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const bgColor = style.backgroundColor;
      // If background is transparent, we need to check parents
      let finalBg = bgColor;
      let curr = el;
      while (finalBg === 'rgba(0, 0, 0, 0)' || finalBg === 'transparent') {
        curr = curr.parentElement;
        if (!curr) break;
        finalBg = window.getComputedStyle(curr).backgroundColor;
      }
      
      const ratio = getContrast(color, finalBg);
      return {
        text: el.textContent.trim().substring(0, 30),
        tagName: el.tagName,
        color,
        bgColor: finalBg,
        ratio: ratio.toFixed(2),
        pass: ratio >= 4.5
      };
    });

    const overflow = document.documentElement.scrollWidth > window.innerWidth;
    
    return { ctaResults, overflow };
  });

  await browser.close();
  return { ...data, errors };
}

async function run() {
  const routes = ['/', '/about', '/services', '/process', '/contact'];
  const viewports = [
    { name: 'Desktop', width: 1280, height: 800 },
    { name: 'Mobile', width: 375, height: 667 }
  ];
  
  for (const route of routes) {
    console.log(`\nRoute: ${route}`);
    for (const vp of viewports) {
      for (const theme of ['light', 'dark']) {
        const result = await checkPage(`http://localhost:8080${route}`, theme, vp);
        console.log(`  ${vp.name} [${theme}]: CTA Count: ${result.ctaResults.length}, Overflow: ${result.overflow}, Errors: ${result.errors.length}`);
        result.ctaResults.forEach(cta => {
          if (!cta.pass) {
            console.log(`    FAIL: CTA "${cta.text}" ratio ${cta.ratio} (Color: ${cta.color}, BG: ${cta.bgColor})`);
          }
        });
        if (result.errors.length > 0) {
          console.log(`    Errors: ${result.errors.join(', ')}`);
        }
      }
    }
  }
}

run();
