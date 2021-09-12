const { isAllowedToDrive, isAllowedToDrink } = require('./legal-age-checker');
const { putEntry, removeEntry } = require('./age-service');

beforeEach(() => {
    putEntry("Test_PersonAged18", 18);
    putEntry("Test_PersonAged15", 15);
});

afterEach(() => {
    removeEntry("Test_PersonAged18");
    removeEntry("Test_PersonAged15");
});

describe('isAllowedToDrive', () => {
    it('should return true given person is 18', () => {
        const inputName = "Test_PersonAged18";
        const expectedOutput = true;

        const actualOutput = isAllowedToDrive(inputName);

        expect(actualOutput).toBe(expectedOutput);
    });

    it('should return false given person is 15', () => {
        const inputName = "Test_PersonAged15";
        const expectedOutput = false;

        const actualOutput = isAllowedToDrive(inputName);

        expect(actualOutput).toBe(expectedOutput);
    });
});

describe('isAllowedToDrink', () => {
    it('should return true given person is 18', () => {
        const inputName = "Test_PersonAged18";
        const expectedOutput = true;

        const actualOutput = isAllowedToDrink(inputName, "Beer");

        expect(actualOutput).toBe(expectedOutput);
    });

    it('should return false given person is 15', () => {
        const inputName = "Test_PersonAged15";
        const expectedOutput = false;

        const actualOutput = isAllowedToDrink(inputName, "Beer");

        expect(actualOutput).toBe(expectedOutput);
    });
});