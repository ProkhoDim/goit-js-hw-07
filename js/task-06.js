'use strict';

const input = document.getElementById('validation-input');

const validateInput = function() {
  const numberOfSymbol = Number(input.dataset.length);
  const lengthOfSymbol = input.value.split('').length;
  input.classList.add('invalid');

  if (numberOfSymbol === lengthOfSymbol) {
    return input.classList.replace('invalid', 'valid');
  }

  return input.classList.replace('valid', 'invalid');
};

input.addEventListener('change', validateInput);
