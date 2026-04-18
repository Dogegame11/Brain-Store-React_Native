const puppeteer = require('puppeteer');
const fs = require('fs');

async function parsePage(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  );

  await page.goto(url, {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });

  // даємо сторінці догрузитись
  await new Promise(r => setTimeout(r, 4000));

  const data = await page.evaluate(() => {
    const result = {};

    // 🔹 ВСІ ТОВАРИ (універсально через data-pid)
    const productNodes = document.querySelectorAll('[data-pid]');

    const REQUIRED_KEYS = ['pid', 'title', 'link', 'image', 'price', 'brand'];

    result.products = Array.from(productNodes)
      .map(el => {
        const linkEl = el.querySelector('a[href]');
        const imgEl = el.querySelector('img');
        const buyBtn = el.querySelector('[data-price]');

        const obj = {
          pid: el.getAttribute('data-pid'),
          title: imgEl?.alt || linkEl?.textContent?.trim(),
          link: linkEl?.href,
          image: imgEl?.getAttribute('data-observe-src') || imgEl?.src,
          price: buyBtn?.getAttribute('data-price'),
          brand: buyBtn?.getAttribute('data-brand'),
        };

        return obj;
      })
      .filter(obj => {
        // 1. всі ключі мають існувати
        for (const key of REQUIRED_KEYS) {
          if (!(key in obj)) return false;
        }

        // 2. жодне поле не null / undefined / порожнє
        for (const key of REQUIRED_KEYS) {
          if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
            return false;
          }
        }

        return true;
      });

    // 🔹 ГОЛОВНА СТОРІНКА (банери / категорії / лінки)
    result.mainLinks = Array.from(document.querySelectorAll('a[href]'))
      .slice(0, 50) // щоб не тягнути все підряд
      .map(a => ({
        text: a.textContent.trim(),
        href: a.href,
      }))
      .filter(x => x.text.length > 0);

    // 🔹 ЗАГОЛОВОК + META
    result.meta = {
      title: document.title,
      description:
        document.querySelector('meta[name="description"]')?.content || null,
    };

    return result;
  });

  await browser.close();
  return data;
}

(async () => {
  const url = 'https://brain.com.ua/ukr/'; // головна сторінка

  const data = await parsePage(url);

  fs.writeFileSync('brain_full.json', JSON.stringify(data, null, 2));

  console.log('Готово');
})();
