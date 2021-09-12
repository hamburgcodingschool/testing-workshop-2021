const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Hamburg Coding School page', () => {
	it('should have right titles for contact page', async () => {
		let success = false;
		let driver = await new Builder().forBrowser('chrome').build();
		try {
			driver.manage().window().maximize();
			driver.get('https://hamburgcodingschool.com/');
			await driver.wait(until.titleIs('Hambusrg Coding School'), 4000);
			driver.findElement(By.className('header__contact')).click();
			await driver.wait(until.titleIs('Hamburg Coding School | Kontakt'), 4000);
			driver.findElement(By.className('header__lang')).click();
			await driver.wait(until.titleIs('Hamburg Coding School | Contact'), 4000);
			success = true;
		} finally {
			await driver.quit();
			expect(success).toBe(true);
		}
	}, 33000);
});