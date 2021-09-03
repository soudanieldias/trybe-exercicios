// Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addOne aqui
function addOne (input) {
    const newArray = [];
  // Função recebe input de array, adiciona 1 a cada elemento numérico
  for (let index = 0; index < input.length; index += 1) {
      newArray.push(input[index] + 1);
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
// Para o valor do array, ao final da execução permanecer imutável, é necessário criar outro arrai e pushear os valores nele.
assert.deepStrictEqual(myArray, unchanged);