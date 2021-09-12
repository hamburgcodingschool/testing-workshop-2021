let ageMap = [
{
	name: "Beer",
	age: 16
},
{
	name: "Tequila",
	age: 18
},
{
	name: "Juice",
	age: 0
}
];

function getLegalAge(beverage) {
	return ageMap.filter(entry => entry.name === beverage)[0].age;
}

function putEntry(beverage, age) {
	ageMap.push({beverage, age});
}

function removeEntry(beverage) {
	ageMap = ageMap.filter(entry => entry.name != beverage);
}

module.exports = { getLegalAge, putEntry, removeEntry };