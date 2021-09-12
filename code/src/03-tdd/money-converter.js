const courses = {
	"EUR": 1.00,
	"USD": 1.19,
	"CHF": 1.09,
	"GBP": 0.86,
	"JPY": 130.30,
	"CNY": 7.66
}


// This function shall convert the value of the amount from the currentCurrency to the otherCurrency.
// Tip: Convert to EUR first, then to the otherCurrency.
// If any of the inputs makes no sense (wrong type, currency not in list, etc.), the function should return 0.00

function convert(amount, currentCurrency, otherCurrency) {
	const amountInEUR = amount / courses[currentCurrency];
	const resultAmount = amountInEUR * courses[otherCurrency];
	if (!resultAmount) {
		return 0;
	}
	return resultAmount;
}

module.exports = { convert }