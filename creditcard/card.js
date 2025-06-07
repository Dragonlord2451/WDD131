function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function displayError(msg) {
  document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  const form = this;

  const number = form.cardNumber.value.trim();
  const month = parseInt(form.expMonth.value, 10);
  const year = parseInt(form.expYear.value, 10);

  displayError('');

  if (isNaN(number) || number.length !== 16) {
    errorMsg += 'Card number is invalid or not 16 digits.<br>';
  } else if (!isCardNumberValid(number)) {
    errorMsg += 'Card number is not recognized.<br>';
  }

  const now = new Date();
  const expDate = new Date(year, month - 1);

  if (isNaN(month) || isNaN(year) || expDate < now) {
    errorMsg += 'Expiration date must be in the future.<br>';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  alert("Payment submitted successfully!");
  return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
