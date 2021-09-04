const { getAge } = require('./age-service');

function isAllowedToDrive(name) {
	return getAge(name) >= 18;
}

function isAllowedToDrink(name, beverage) {
	return beverage === 'Beer' && getAge(name) >= 16;
}

module.exports = { isAllowedToDrive, isAllowedToDrink };