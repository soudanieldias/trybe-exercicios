// Imports
const assert = require('assert'); // Assert Library

const newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Tenho um array

const func = value => value >= 5; // Defino a função que irá executar uma ação, ao ser chamada com o Filter

let filtro = (array) => array.filter(func);
/* Chama o filter no Array newArray,
executa a função de VERIFICAÇÃO (Valor do Elemento >= 5),
e armazena seu resultado em um novo Array */

// assert.fail();
console.log(filtro(newArray));
assert.deepStrictEqual(filtro(newArray), [5, 6, 7, 8, 9]);
