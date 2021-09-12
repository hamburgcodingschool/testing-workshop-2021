const { convert } = require('./money-converter');

describe('convert', () => {
	it('should return 10 if converting 10 EUR to EUR', () => {
		const inputAmount = 10.00;
		const inputCurrentCurrency = 'EUR';
		const inputOtherCurrency = 'EUR';
		const expectedOutput = 10.00;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 20 if converting 20 EUR to EUR', () => {
		const inputAmount = 20.00;
		const inputCurrentCurrency = 'EUR';
		const inputOtherCurrency = 'EUR';
		const expectedOutput = 20.00;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 1303 if converting 10 EUR to JPY', () => {
		const inputAmount = 10.00;
		const inputCurrentCurrency = 'EUR';
		const inputOtherCurrency = 'JPY';
		const expectedOutput = 1303.00;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 2606 if converting 20 EUR to JPY', () => {
		const inputAmount = 20.00;
		const inputCurrentCurrency = 'EUR';
		const inputOtherCurrency = 'JPY';
		const expectedOutput = 2606.00;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 1094.96 if converting 10 USD to JPY', () => {
		const inputAmount = 10.00;
		const inputCurrentCurrency = 'USD';
		const inputOtherCurrency = 'JPY';
		const expectedOutput = 1094.96;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 2189.92 if converting 20 USD to JPY', () => {
		const inputAmount = 20.00;
		const inputCurrentCurrency = 'USD';
		const inputOtherCurrency = 'JPY';
		const expectedOutput = 2189.92;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 1195.41 if converting 10 CHF to JPY', () => {
		const inputAmount = 10.00;
		const inputCurrentCurrency = 'CHF';
		const inputOtherCurrency = 'JPY';
		const expectedOutput = 1195.41;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 7.67 if converting 1000 JPY to USD', () => {
		const inputAmount = 1000.00;
		const inputCurrentCurrency = 'JPY';
		const inputOtherCurrency = 'USD';
		const expectedOutput = 9.13;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});

	it('should return 0.00 if converting a string "ten" EUR to EUR', () => {
		const inputAmount = "ten";
		const inputCurrentCurrency = 'EUR';
		const inputOtherCurrency = 'EUR';
		const expectedOutput = 0.00;
		
		const actualOutput = convert(inputAmount, inputCurrentCurrency, inputOtherCurrency);

		expect(actualOutput).toBeCloseTo(expectedOutput, 2);
	});
});