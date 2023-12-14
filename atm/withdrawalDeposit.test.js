// withdrawalDeposit.test.js
const ATM = require('./atmOperations');

test('withdrawal and deposit operations', () => {
  const atm = new ATM(100);

  // Check initial balance
  expect(atm.checkBalance()).toBe(100);

  // Withdraw 50
  expect(atm.withdrawMoney(50)).toBe('Withdrawal successful. Remaining balance: 50');
  expect(atm.checkBalance()).toBe(50);

  // Try to withdraw more than balance
  expect(atm.withdrawMoney(100)).toBe('Invalid withdrawal amount or insufficient funds.');
  expect(atm.checkBalance()).toBe(50);

  // Deposit 30
  expect(atm.depositMoney(30)).toBe('Deposit successful. New balance: 80');
  expect(atm.checkBalance()).toBe(80);

  // Try to deposit a negative amount
  expect(atm.depositMoney(-20)).toBe('Invalid deposit amount.');
  expect(atm.checkBalance()).toBe(80);
});
