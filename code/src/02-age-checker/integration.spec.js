const { isAllowedToDrive } = require('./legal-age-checker');
const { getAge, putEntry, removeEntry } = require('./age-service');

beforeEach(() => {
    putEntry("Test_PersonAged18", 18);
});

afterEach(() => {
    removeEntry("Test_PersonAged18");
});

describe('isAllowedToDrive', () => {
    it('should return true given person is 18', () => {
        const inputName = "Test_PersonAged18";
        const expectedOutput = true;

        const actualOutput = isAllowedToDrive(inputName);

        expect(actualOutput).toBe(expectedOutput);
    });
});