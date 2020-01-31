var welcome = document.querySelector('.welcome');
var close = document.querySelector('.tiny-x');
var accountStatus = document.querySelector(".account-status");

close.addEventListener('click',closeWelcomeMessage);

function closeWelcomeMessage() {
  welcome.remove();
  accountStatus.classList.remove('account-status');
  accountStatus.classList.add('account-status-2');
}
