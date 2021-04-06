const checkButton = document.getElementById('check-btn');

const one = document.getElementById('input-1');
const two = document.getElementById('input-2');

const alert = document.getElementById('result');

const checkInputs = (inputOne, inputTwo) => {
  if (inputOne.value.length === 0 && inputTwo.value.length === 0) {
    if (alert.className.split(' ').includes('alert-danger')) {
      alert.classList.remove('alert-danger');
    }
    if (alert.className.split(' ').includes('alert-success')) {
      alert.classList.remove('alert-success');
    }
    alert.innerHTML = 'Add inputs to check equality';
  } else if (inputOne.value === inputTwo.value) {
    alert.classList.remove('alert-danger');
    alert.classList.add('alert-success');
    alert.innerHTML = 'The inputs are equal';
  } else {
    alert.classList.remove('alert-success');
    alert.classList.add('alert-danger');
    alert.innerHTML = 'The inputs are not equal';
  }
};

checkButton.addEventListener('click', (e) => {
  e.preventDefault();
  checkInputs(one, two);
});
