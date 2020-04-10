const puppeteer = require('puppeteer');
const moment = require('moment');

(async() => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto('https://sdr2.justjakob.de/map');
    await page.waitForSelector('button[title="Zoom out"]');
    await page.click('button[title="Zoom out"]');
    await page.click('button[title="Zoom out"]');
    setInterval(async() => {
        const date = moment().format('YYYY-MM-DD_HH-mm-ss');
        await page.screenshot({path: 'output/test-' + date + '.png'});
    }, 15000);
})();