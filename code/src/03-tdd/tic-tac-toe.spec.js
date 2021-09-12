const { whoWins } = require('./tic-tac-toe');

describe('whoWins', () => {
	it('should return Nobody won yet if rows are empty', () => {
		const inputRow1 = [' ', ' ', ' '];
		const inputRow2 = [' ', ' ', ' '];
		const inputRow3 = [' ', ' ', ' '];
		const expectedOutput = 'Nobody won yet';
		
		const actualOutput = whoWins(inputRow1, inputRow2, inputRow3);

		expect(actualOutput).toBe(expectedOutput);
	});
});