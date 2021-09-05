function multiply(a, b) {
	return multiply1(a, b);
}












function multiply1(a, b) {
	let result = 0;
	for (i = 0; i < a; i++) {
		result = result + b;
	}
	return result;
}


function multiply2(a, b) {
	let absoluteA = a < 0 ? a*(-1) : a*(1);
	let absoluteB = b < 0 ? b*(-1) : b*(1);
	let result = 0;
	for (i = 0; i < absoluteA; i++) {
		result = result + absoluteB;
	}
	return a < 0 ? result*(-1) : result*(1);
}


function multiply3(a, b) {
	let absoluteA = a < 0 ? a*(-1) : a*(1);
	let absoluteB = b < 0 ? b*(-1) : b*(1);
	let result = 0;
	for (i = 0; i < absoluteA; i++) {
		result = result + absoluteB;
	}
	return (a < 0 && b > 0) || (a > 0 && b < 0) ? result*(-1) : result;
}


function multiply4(a, b) {
	let absoluteA = a < 0 ? a*(-1) : a*(1);
	let absoluteB = b < 0 ? b*(-1) : b*(1);
	let result = absoluteB;
	for (i = 1; i < absoluteA; i++) {
		result = result + absoluteB;
	}
	return (a < 0 && b > 0) || (a > 0 && b < 0) ? result*(-1) : result;
}

function multiply5(a, b) {
	return a * b;
}

function multiply6(a, b) {
	if (a === 0 || b === 0) {
		return 0;
	}
	return a * b;
}

module.exports = { multiply }




























/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(" Which multiply to use? ", (func) => {
rl.question(" First number? ", (first) => {
rl.question(" Second number? ", (second) => {
	console.log("Result for multiply"+func+"("+first+","+second+"): ");
	if (func === '1') {
		console.log(multiply1(first, second));
	} else if (func === '2') {
		console.log(multiply2(first, second));
	} else if (func === '3') {
		console.log(multiply3(first, second));
	} else if (func === '4') {
		console.log(multiply4(first, second));
	}
	process.exit(0);
});
});
});
*/