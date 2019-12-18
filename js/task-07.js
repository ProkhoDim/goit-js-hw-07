'use strict';

const fontSizeControl = document.getElementById('font-size-control');

const changeFontSize = function() {
  let rangePosition = Number(fontSizeControl.value) / 100;

  const text = document.getElementById('text');

  text.style.fontSize = `${28 * rangePosition + 2}px`;
};

fontSizeControl.addEventListener('input', changeFontSize);
