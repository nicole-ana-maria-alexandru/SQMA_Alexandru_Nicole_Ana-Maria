// initialBalance.test.js
const ATM = require('./atmOperations');

test('initial balance is 0', () => {
  const atm = new ATM();
  expect(atm.checkBalance()).toBe(0);
});
