const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  
  await page.goto('http://127.0.0.1:5500/index.html');


  const userName = 'Leanne Graham'; 
  await page.type('#userNameInput', userName);

  await page.click('#getUserButton');

  await page.waitForTimeout(3000);

  await page.waitForSelector('#userCity');

  const userCity = await page.$eval('#userCity', element => element.textContent);

  if (userCity === 'Gwenborough') {
    console.log(`Місто користувача співпадає з очікуваним результатом: ${userCity}`);
  } else {
    console.log(`Місто користувача не співпадає з очікуваним результатом: ${userCity}`);
  }

  await browser.close();
})();
