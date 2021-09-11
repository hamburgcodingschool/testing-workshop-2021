let ageMap = [
{
	name: "Paul",
	age: 31
},
{
	name: "Anna",
	age: 35
},
{
	name: "Alex",
	age: 15
},
{
	name: "Dennis",
	age: 17
}
];

function getAge(name) {
	// TODO: Validate name
	return ageMap.filter(entry => entry.name === name)[0].age;
}

function putEntry(name, age) {
	ageMap.push({name, age});
}

function removeEntry(name) {
	ageMap = ageMap.filter(entry => entry.name != name);
}

module.exports = { getAge, putEntry, removeEntry };