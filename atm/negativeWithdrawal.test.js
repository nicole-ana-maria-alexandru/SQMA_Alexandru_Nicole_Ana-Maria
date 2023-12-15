// negativeWithdrawal test case
const ATM = require('./atmOperations');

test('withdraw a negative amount', () => {
  const atm = new ATM(50);

  // Try to withdraw a negative amount
  expect(atm.withdrawMoney(-20)).toBe('Invalid withdrawal amount or insufficient funds.');
  expect(atm.checkBalance()).toBe(50);
});
