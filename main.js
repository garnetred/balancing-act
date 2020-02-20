var welcome = document.querySelector('.welcome');
var close = document.querySelector('.tiny-x');
var closeConfirmation = document.querySelector('.tiny-x-2')
var expenseButton = document.querySelector('.expense-button');
var accountStatus = document.querySelector(".account-status");
var dashboardButton = document.querySelector("#dashboard-button");
var transactionButton = document.querySelector("#transaction-button");
var confirmationMessage = document.querySelector('.confirmation-message');
var logConfirmation = document.querySelector('.log-confirmation');
var dashboard = document.getElementsByClassName("dashboard");
var transaction = document.getElementsByClassName("transaction");

document.addEventListener('click', clickHandler)

function clickHandler(event) {
  if (event.target === dashboardButton) {
    showDashboard();
    console.log(event.target)
  } else if (event.target === transactionButton) {
    showTransactions();
    console.log(event.target)
  } else if (event.target===close) {
    var welcome = document.querySelector('.welcome');
    welcome.remove();
    accountStatus.classList.replace('account-status', 'account-status-2');
  } else if (event.target===expenseButton) {
    var amount = document.querySelector('.amount');
    logConfirmation.innerHTML = `Your expense of $${amount.value} has been logged.`
    confirmationMessage.classList.remove('.hide');
  } else if (event.target===closeConfirmation) {
    confirmationMessage.classList.add('hide');
  }
}

function showTransactions() {
  for (var i = 0; i < transaction.length; i++) {
      transaction[i].classList.remove("hide");
      transaction[i].classList.add('show');
  }
  hideDashboard();
}

function hideTransactions() {
  for (var i = 0; i < transaction.length; i++) {
      transaction[i].classList.add("hide");
      transaction[i].classList.remove('show');
    }
}

function hideDashboard() {
  for (var i = 0; i < dashboard.length; i++){
      dashboard[i].classList.remove("show");
      dashboard[i].classList.add("hide");
}
}

function showDashboard() {
  for (var i = 0; i < dashboard.length; i++){
      dashboard[i].classList.remove("show");
      dashboard[i].classList.remove("hide");
      transaction[i].classList.toggle("hide");
  }
  hideTransactions();
}
