var welcome = document.querySelector('.welcome');
var close = document.querySelector('.tiny-x');
var accountStatus = document.querySelector(".account-status");
close.addEventListener('click',closeWelcomeMessage);
function closeWelcomeMessage() {
  welcome.remove();
  accountStatus.classList.remove('account-status');
  accountStatus.classList.add('account-status-2');
}
var dashboardButton=document.querySelector("#dashboard-button");
var transactionButton = document.querySelector("#transaction-button");
var dashboard1=document.getElementById("dashboard1");
var dashboard2=document.getElementById("dashboard2");
var dashboard3=document.getElementById("dashboard3")
var transaction1 = document.getElementById("transaction1");
var transaction2 = document.getElementById("transaction2");
var transaction3 = document.getElementById("transaction3");

dashboardButton.addEventListener('click',showDashboard)
transactionButton.addEventListener('click', showTransactions)

function showDashboard() {
  //if dashboard is hidden
  if ((dashboard1.classList.contains("hide")) && (dashboard2.classList.contains("hide")) &&
   (dashboard3.classList.contains("hide"))) {
     dashboard1.classList.toggle("show");
     dashboard2.classList.toggle("show");
     dashboard3.classList.toggle("show");
     dashboard1.classList.remove("hide");
     dashboard2.classList.remove("hide");
     dashboard3.classList.remove("hide");
     transaction1.classList.toggle("hide");
     transaction2.classList.toggle("hide");
     transaction3.classList.toggle("hide")
   }
}

function showTransactions() {
  //if transactions are hidden
  if ((transaction1.classList.contains("hide")) && (transaction2.classList.contains("hide"))
  &&(transaction3.classList.contains("hide"))) {
    transaction1.classList.toggle("hide");
    transaction2.classList.toggle("hide");
    transaction3.classList.toggle("hide");
    dashboard1.classList.add("hide");
    dashboard2.classList.add("hide");
    dashboard3.classList.add("hide");
    dashboard1.classList.remove("show");
    dashboard2.classList.remove("show");
    dashboard3.classList.remove("show");
  }
}
