const resetAlertColor = () => {
  const alert = document.getElementById('result');
  alert.className = 'alert mt-5'
}

const changeAlert = (message, color) => {
  const alert = document.getElementById('result');
  resetAlertColor();
  alert.classList.add(`alert-${color}`);
  alert.innerHTML = message;
}

const checkInputs = () => {
  const inputOne = document.getElementById('input-1');
  const inputTwo = document.getElementById('input-2');

  if (inputOne.value.length === 0 && inputTwo.value.length === 0) {
    changeAlert('Add inputs to check equality', 'primary');
  } else if (inputOne.value === inputTwo.value) {
    changeAlert('The inputs are equal', 'success');
  } else {
    changeAlert('The inputs are not equal', 'danger');
  }
};

const clearInputs = () => {
  document.getElementById('input-1').value = '';
  document.getElementById('input-2').value = '';
  changeAlert('Add inputs to check equality', 'primary');
}

const checkButton = document.getElementById('check-btn');

checkButton.addEventListener('click', (e) => {
  e.preventDefault();
  checkInputs();
});

const clearButton = document.getElementById('clear-btn');

clearButton.addEventListener('click', () => {
  clearInputs();
})