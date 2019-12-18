'use strict';

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

// const listItems = ingredients
//   .map(elem => {
//     const liTag = document.createElement('li');
//     liTag.textContent = elem;
//     console.log(liTag);
//     return liTag;
//   })
//   .forEach(item => {
//     console.log(document.getElementById('ingredients').children);
//     return document.getElementById('ingredients').appendChild(item);
//   });

const listItems = ingredients.map(elem => {
  const liTag = document.createElement('li');
  liTag.textContent = elem;
  console.log(liTag);
  return liTag;
});

document.getElementById('ingredients').append(...listItems);
