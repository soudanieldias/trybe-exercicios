// Imports
const assert = require('assert'); // Assert Library

const newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Tenho um array

const func = (acc, value) => acc += value; // Defino a função que irá executar uma ação, ao ser chamada com o Reduce

let redutor = (array) => array.reduce(func);
/* Chama o reduce no Array newArray,
executa a função de SOMA (Accumulator += ElementoAtual),
e armazena seu resultado */

// assert.fail();
console.log(redutor(newArray));
assert.deepStrictEqual(redutor(newArray), 45);
