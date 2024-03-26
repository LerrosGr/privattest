const form = document.querySelector('.operations-form');
const button = document.querySelector('.result');
const output = document.querySelector('.output-text');
const inputFirstValue = document.querySelector('.first-value');
const inputLastValue = document.querySelector('.last-value');

button.addEventListener('click', handleResult);

function handleResult(event) {
  const elements = form.elements.operations.value;
  switch (elements) {
    case '+':
      output.textContent =
        Number(inputFirstValue.value) + Number(inputLastValue.value);
      break;
    case '-':
      output.textContent =
        Number(inputFirstValue.value) - Number(inputLastValue.value);
      break;
    case '*':
      output.textContent =
        Number(inputFirstValue.value) * Number(inputLastValue.value);
      break;
    case '%':
      output.textContent =
        Number(inputFirstValue.value) % Number(inputLastValue.value);
      break;
  }
  inputFirstValue.value = '';
  inputLastValue.value = '';
}
