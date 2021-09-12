const { multiply } = require('./multiply');

test('multiply 3 * 5 is equal to 15', () => {
  const inputA = 3;
  const inputB = 5;
  const expectedOutput = 15;
  const actualOutput = multiply(inputA, inputB);

  expect(actualOutput).toBe(expectedOutput);
});

test('multiply -3 * 5 is equal to -15', () => {
  const inputA = -3;
  const inputB = 5;
  const expectedOutput = -15;
  const actualOutput = multiply(inputA, inputB);

  expect(actualOutput).toBe(expectedOutput);
});

test('multiply 3 * -5 is equal to -15', () => {
  const inputA = 3;
  const inputB = -5;
  const expectedOutput = -15;
  const actualOutput = multiply(inputA, inputB);

  expect(actualOutput).toBe(expectedOutput);
});

test('multiply -3 * -5 is equal to 15', () => {
  const inputA = -3;
  const inputB = -5;
  const expectedOutput = 15;
  const actualOutput = multiply(inputA, inputB);

  expect(actualOutput).toBe(expectedOutput);
});

test('multiply anything with 0 is always equal to 0', () => {
  expect(multiply(0, 1)).toBe(0);
  expect(multiply(0, 5)).toBe(0);
  expect(multiply(0, -4)).toBe(0);
  expect(multiply(0, 0)).toBe(0);
  expect(multiply(1, 0)).toBe(0);
  expect(multiply(5, 0)).toBe(0);
  expect(multiply(-4, 0)).toBe(0);
});