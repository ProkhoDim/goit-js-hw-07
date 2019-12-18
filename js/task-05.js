'use strict';

const textInput = document.getElementById('name-input');

const outputSpan = document.getElementById('name-output');

const replaceText = function() {
  if (textInput.value !== '') {
    outputSpan.textContent = textInput.value;
  } else {
    outputSpan.textContent = 'незнакомец';
  }
};

textInput.addEventListener('input', replaceText);
