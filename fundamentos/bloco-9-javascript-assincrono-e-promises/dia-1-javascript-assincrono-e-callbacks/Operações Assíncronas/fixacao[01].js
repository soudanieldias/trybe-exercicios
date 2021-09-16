const assert = require('assert');

const pushNumber = (list, number) => list.push(number);
// Arrow function que recebe um número (number) e joga no array (list)

let numbers = [];

pushNumber(numbers, 1); // Joga o número 1 no array de Números
pushNumber(numbers, 2); // Joga o número 2 no array de Números
pushNumber(numbers, 3); // Joga o número 3 no array de Números

assert.deepStrictEqual(numbers, [1, 2, 3]); // Verifica se o estado final do array é: [1, 2, 3]