function multiply(a, b) {
	return multiply6(a, b);
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
