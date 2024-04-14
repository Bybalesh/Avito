const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test("CO2 Test", async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto('https://www.avito.ru/avito-care/eco-impact');

	const element = await page.$('.desktop-disabled-kdOve');

	if (element) {
		const boundingBox = await element.boundingBox();

		if (boundingBox) {
			await page.screenshot({ path: "./output/screenshot.png" });


			console.log('Скриншот элемента был сохранен.');
		} else {
			console.log('Область элемента пустая.');
		}
	} else {
		console.log('Элемент не найден на странице.');
	}

	await browser.close();
});
