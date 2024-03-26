const inputCreate = document.querySelector('.input-create');
const inputDestroy = document.querySelector('.input-destroy');
const buttonCreate = document.querySelector('.button-create');
const buttonDestroy = document.querySelector('.button-destroy');
const buttonTotalDestroy = document.querySelector('.button-total-destroy');
const container = document.querySelector('.container');

buttonCreate.addEventListener('click', handleCreate);
buttonDestroy.addEventListener('click', handleDestroy);

function createCircle(amount) {
  for (let i = 0; i < amount; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomHexColor();
    circle.style.height = `${150 - i * 10}px`;
    circle.style.width = `${150 - i * 10}px`;
    container.appendChild(circle);
    circle.addEventListener(
      'mouseover',
      event => (circle.style.backgroundColor = getRandomHexColor())
    );
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function addCircle(amount) {
  const widthLastElem = parseInt(container.lastElementChild.style.width);
  const heightLastElem = parseInt(container.lastElementChild.style.height);
  //   console.log(heightLastElem);
  //   console.log(widthLastElem);
  for (let i = 0; i < amount; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomHexColor();
    circle.style.height = `${heightLastElem - (i + 1) * 10}px`;
    circle.style.width = `${widthLastElem - (i + 1) * 10}px`;
    container.appendChild(circle);
    // console.log(circle.style.width);
    // console.log(circle.style.height);
    circle.addEventListener(
      'mouseover',
      event => (circle.style.backgroundColor = getRandomHexColor())
    );
  }
}

function handleCreate(event) {
  //   destroy();
  const amount = Number(inputCreate.value);
  if (container.hasChildNodes()) {
    addCircle(amount);
  } else {
    createCircle(amount);
  }

  inputCreate.value = '';
}

function handleDestroy(event) {
  const number = Number(inputDestroy.value);
  DestroyCircle(number);
  inputDestroy.value = '';
}

function destroy() {
  container.innerHTML = '';
}

function DestroyCircle(number) {
  const enableCircle = document.querySelectorAll('.circle');
  const newArray = Array.from(enableCircle).reverse();
  for (let i = 0; i < number; i++) {
    newArray[i].remove();
  }
}

buttonTotalDestroy.addEventListener('click', handleTotalDestroy);
function handleTotalDestroy() {
  container.innerHTML = '';
}
