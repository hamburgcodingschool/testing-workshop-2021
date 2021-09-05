const {Builder, By, Key, until} = require('selenium-webdriver');

xdescribe('Hamburg Coding School page', () => {
	it('should have right titles for contact page', async () => {
		let success = false;
		let driver = await new Builder().forBrowser('chrome').build();
		try {
			await driver.manage().window().maximize();
			await driver.get('https://hamburgcodingschool.com/');
			await driver.wait(until.titleIs('Hamburg Coding School'), 1000);
			await driver.findElement(By.className('header__contact')).click();
			await driver.wait(until.titleIs('Hamburg Coding School | Kontakt'), 1000);
			await driver.findElement(By.className('header__lang')).click();
			await driver.wait(until.titleIs('Hamburg Coding School | Contact'), 1000);
			success = true;
		} finally {
			await driver.quit();
			expect(success).toBe(true);
		}
	});
});