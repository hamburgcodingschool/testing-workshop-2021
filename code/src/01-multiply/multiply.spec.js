const { multiply } = require('./multiply');

test('multiply 3 * 5 is equal to 15', () => {
  const inputA = 3;
  const inputB = 5;
  const expectedOutput = 15;
  const actualOutput = multiply(inputA, inputB);

  expect(actualOutput).toBe(expectedOutput);
});