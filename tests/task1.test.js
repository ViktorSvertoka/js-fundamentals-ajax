const puppeteer = require('puppeteer');

async function checkUsersDisplayed() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/'); 

  
  const userList = await page.$('.usersList');
  await  page.waitForTimeout(3000);

  if (userList) {
    const userItems = await userList.$$('li');

    if (userItems.length > 0) {
      console.log(`Користувачі відображені на сторінці.`);
    } else {
      console.log(`На сторінці немає користувачів.`);
    }
  } else {
    console.log(`Елемент з класом "usersList" не знайдено на сторінці.`);
  }

  await browser.close();
}

checkUsersDisplayed().catch(error => console.error(error));
