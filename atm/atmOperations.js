class ATM {
    constructor(balance = 0) {
    this.balance = balance;
}

checkBalance() {
    return this.balance;
}

withdrawMoney(amount) {
    if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    return `Withdrawal successful. Remaining balance: ${this.balance}`;
    } else {
    return "Invalid withdrawal amount or insufficient funds.";
    }
}

depositMoney(amount) {
    if (amount > 0) {
    this.balance += amount;
    return `Deposit successful. New balance: ${this.balance}`;
    } else {
    return "Invalid deposit amount.";
    }
}
}

module.exports = ATM;
