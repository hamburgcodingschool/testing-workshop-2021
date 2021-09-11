const { multiply } = require('./multiply');

test('multiply 3 * 5 is equal to 15', () => {
  expect(multiply(3,5)).toBe(15);
});