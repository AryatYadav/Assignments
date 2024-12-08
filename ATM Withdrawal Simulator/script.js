const withdrawalForm = document.getElementById('withdrawal-form');
// const messageDiv = document.getElementById('message');

let accountBalance = 5000; // Starting balance
let dailyWithdrawalLimit = 1000; // Daily limit
let totalWithdrawnToday = 0; // Total withdrawn today

withdrawalForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const withdrawalAmount = parseFloat(document.getElementById('withdrawal-amount').value);

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        displayMessage('Please enter a valid amount to withdraw.');
        return;
    }

    if (withdrawalAmount > accountBalance) {
        displayMessage1('Insufficient funds in your account.');
        return;
    }
    if (totalWithdrawnToday + withdrawalAmount > dailyWithdrawalLimit) {
        displayMessage1('Error: Daily limit exceeded. Maximum withdrawl is $1000.');
        return;
    }

    accountBalance -= withdrawalAmount;
    totalWithdrawnToday += withdrawalAmount;

    displayMessage(`Withdrawal successful! You withdrew $${withdrawalAmount}. your new balance is $${accountBalance}.`);
});

function displayMessage(message) {
    document.getElementById("message1").innerText= message;
}
function displayMessage1(message) {
    document.getElementById("message2").innerText = message;
}
