const puppeteer = require('puppeteer');
const fs = require('fs');

async function parsePage(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Емуляція реального користувача
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  );

  try {
    console.log(`Перехід на сторінку: ${url}`);
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 60000,
    });

    // 1. Прокрутка сторінки вниз, щоб активувати Lazy Load зображень та довантажити контент
    console.log('Скролимо сторінку для завантаження контенту...');
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let totalHeight = 0;
        let distance = 400; // швидкість скролу
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    // Невелика пауза після скролу
    await new Promise(r => setTimeout(r, 2000));

    // 2. Збір даних
    const data = await page.evaluate(() => {
      const result = {
        products: [],
        mainLinks: [],
        meta: {},
      };

      const REQUIRED_KEYS = ['pid', 'title', 'link', 'image', 'price', 'brand'];

      // Використовуємо Map для унікальності за PID
      const productsMap = new Map();

      // Знаходимо всі блоки з товарами
      const productNodes = document.querySelectorAll('[data-pid]');

      productNodes.forEach(el => {
        const pid = el.getAttribute('data-pid');

        // Якщо такий товар вже додано (дублікат на сторінці), пропускаємо
        if (!pid || productsMap.has(pid)) return;

        const linkEl = el.querySelector('a[href]');
        const imgEl = el.querySelector('img');
        const buyBtn = el.querySelector('[data-price]');

        const productObj = {
          pid: pid,
          title: imgEl?.alt || linkEl?.textContent?.trim() || 'Без назви',
          link: linkEl?.href,

          image:
            imgEl?.getAttribute('data-observe-src') ||
            imgEl?.getAttribute('data-src') ||
            imgEl?.src,
          price: buyBtn?.getAttribute('data-price'),
          brand: buyBtn?.getAttribute('data-brand'),
        };

        // Валідація: чи всі необхідні поля заповнені
        const isValid = REQUIRED_KEYS.every(
          key =>
            productObj[key] !== null &&
            productObj[key] !== undefined &&
            productObj[key] !== '',
        );

        if (isValid) {
          productsMap.set(pid, productObj);
        }
      });

      result.products = Array.from(productsMap.values());

      // Збір посилань (наприклад, меню чи категорії)
      result.mainLinks = Array.from(document.querySelectorAll('a[href]'))
        .slice(0, 60)
        .map(a => ({
          text: a.textContent.trim().replace(/\s+/g, ' '),
          href: a.href,
        }))
        .filter(x => x.text.length > 2 && !x.href.includes('javascript:'));

      // Мета-дані
      result.meta = {
        title: document.title,
        description:
          document.querySelector('meta[name="description"]')?.content || null,
        url: window.location.href,
        count: result.products.length,
      };

      return result;
    });

    await browser.close();
    return data;
  } catch (error) {
    console.error('Сталася помилка при парсингу:', error);
    await browser.close();
    return null;
  }
}

(async () => {
  const url = 'https://brain.com.ua/ukr/';

  const data = await parsePage(url);

  if (data) {
    fs.writeFileSync('brain_full.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log('--- Звіт ---');
    console.log(`Знайдено унікальних товарів: ${data.products.length}`);
    console.log(`Заголовок сторінки: ${data.meta.title}`);
    console.log('Дані збережено у файл brain_full.json');
  } else {
    console.log('Не вдалося отримати дані.');
  }
})();
