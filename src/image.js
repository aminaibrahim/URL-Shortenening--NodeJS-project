import puppeteer from 'puppeteer';
import db from './sequelizeDB';

const getScreenshot = async (longurl, shortid) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1400,
    height: 800,
  });
  await page.goto(longurl, { timeout: 7000000 });
  await page.screenshot({ path: `public/screenshots/${shortid}.png` });

  await browser.close();
  db.insertScreenshots(`screenshots/${shortid}.png`, shortid);
};
export default getScreenshot;
