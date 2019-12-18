'use strict';

let counterValue = Number(document.getElementById('value').textContent);

const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementBtn = document.querySelector('[data-action="decrement"]');

const increment = function() {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};

const decrement = function() {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};

// document.getElementById('increment').addEventListener('click', increment);

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);
