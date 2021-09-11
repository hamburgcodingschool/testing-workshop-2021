const { isAllowedToDrive } = require('./legal-age-checker');
const { getAge } = require('./age-service');

jest.mock('./age-service');

test('Person is 34, then they should be allowed to drive because they are over 18', () => {
    const expectedOutput = true;

    getAge.mockImplementation(() => 34);

    const actualOutput = isAllowedToDrive();

    expect(actualOutput).toBe(expectedOutput);
});

test('Person is 15, then they should be allowed to drive because they are over 18', () => {
    const expectedOutput = false;

    getAge.mockImplementation(() => 15);

    const actualOutput = isAllowedToDrive();

    expect(actualOutput).toBe(expectedOutput);
});

test('isAllowedToDrive function uses age service to get age', () => {
    const inputName = "Jannek";
    const expectedOutput = true;

    getAge.mockImplementation((name) => {
        if (name === "Jannek") {
            return 34;
        }
        return 15;
    });

    const actualOutput = isAllowedToDrive(inputName);

    expect(actualOutput).toBe(expectedOutput);
});

test('isAllowedToDrive function uses age service to get age', () => {
    getAge.mockReset();
    const inputName = "Siggi";
    getAge.mockImplementation(() => 0);
    isAllowedToDrive(inputName);
    expect(getAge.mock.calls.length).toBe(1);
    expect(getAge.mock.calls[0][0]).toBe(inputName);
});