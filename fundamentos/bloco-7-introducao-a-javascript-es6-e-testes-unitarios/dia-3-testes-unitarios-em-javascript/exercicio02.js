/*
 2- A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    2.1- Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    2.2- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    2.3- Verifique se o array passado por parâmetro não sofreu alterações
    2.4- Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// 2.1- Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
let arrayForCompare = [1, 2, 3, 4];
let arrayIncomplete = myRemove(arrayForCompare, 3);
let arrayIncomplete2 = myRemove(arrayForCompare, 5);

assert.strictEqual(typeof myRemove, 'function'); // Verifica se myRemove é uma Função
// 2.2- Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado 
assert.deepStrictEqual(arrayIncomplete, [1, 2, 4], 'TESTE'); // Verifica se os objetos e seus filhos são exatamente iguais a [1, 2, 3]
// 2.3- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(arrayIncomplete, arrayForCompare); // Verifica se o objeto modificado e o original não são iguais
// 2.4- Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
assert.deepStrictEqual(arrayIncomplete2, [1, 2, 3, 4], 'TESTE');