
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputAmount = document.querySelector('#controls input');


function createBoxes(amount) {
  const boxesDiv = document.querySelector('#boxes');
  
  const indices = Array.from({ length: amount }, (_, i) => i);
  boxesDiv.innerHTML = '';
  const boxes = indices.map(i => {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });
  boxesDiv.append(...boxes);
}


function destroyBoxes() {
  const boxesDiv = document.querySelector('#boxes');
  boxesDiv.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = Number(inputAmount.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmount.value = ''; 
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});





  