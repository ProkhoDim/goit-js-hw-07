'use strict';

const boxesElement = document.getElementById('boxes');
let numberOfBoxes = Number(document.querySelector('#controls input').value);

// const btn = document.querySelector('#controls button');s

function randColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const createBoxes = function(amount) {
  console.log(amount, 'click');
  for (let i = 0; i < amount; i++) {
    boxesElement.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${30 + i * 10}px; height: ${30 +
        i * 10}px; background-color: ${randColor()};"></div>`,
    );
  }
};

const createBtn = document.querySelector('button[data-action="render"]');

const destroyBtn = document.querySelector('[data-action="destroy"]');
console.log(numberOfBoxes);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', console.log('destroy'));
