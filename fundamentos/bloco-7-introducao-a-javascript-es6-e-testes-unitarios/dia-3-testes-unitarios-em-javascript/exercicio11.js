// Use a variável parameter como parâmetro da função abaixo, escreva testes
// para verificar se a mesma está retornando como se vê na variável result e,
// caso não esteja, altere o código para que ele passe nos testes. 
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let position = 1;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(position);
      position += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');

// assert.deepStrictEqual(removeVowels(parameter), ['_', 'a', '_', 'a', '_', 'e']); // [RETORNO DEFAULT]
assert.deepStrictEqual(removeVowels(parameter), ['D', 1, 'y', 2, 'n', 3]);