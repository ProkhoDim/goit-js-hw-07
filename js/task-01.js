'use strict';

const counterElem = Array.from(document.getElementById('categories').children);

console.log(`В списке ${document.getElementById('categories').children.length} категории`);

// for (const element of counterElem) {
//   console.log(
//     `Категория: ${element.firstElementChild.textContent} \n Количество элементов: ${element.lastElementChild.children.length}`,
//   );
// }

counterElem.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent} \n Количество элементов: ${element.lastElementChild.children.length}`,
  ),
);
