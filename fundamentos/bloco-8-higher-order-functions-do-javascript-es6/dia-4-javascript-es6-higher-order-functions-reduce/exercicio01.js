const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Dada uma matriz, transforme em um array.
function flatten() {
  // escreva seu código aqui
  const newArray = arrays.flat();
  return newArray;
}

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
console.log(flatten());