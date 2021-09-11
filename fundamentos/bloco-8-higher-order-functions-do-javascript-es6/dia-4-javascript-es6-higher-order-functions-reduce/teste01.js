// Imports
const assert = require('assert'); // Assert Library

const newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Tenho um array

const add = value => value + 1; // Defino a função que irá executar uma ação, ao ser chamada com o map

let copy = (array) => array.map(add);
/* Chama o map no Array numbers,
executa a função de ADD (Incrementando 1 a cada elemento do Array),
e armazena seu resultado em uma variável */

// assert.fail();
assert.deepStrictEqual(copy(newArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
