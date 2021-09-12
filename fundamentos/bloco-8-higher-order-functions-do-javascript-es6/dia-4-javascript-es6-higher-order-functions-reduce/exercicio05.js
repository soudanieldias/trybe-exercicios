const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
// LÓGICA DA FUNÇÃO:
// ** Manipula o array names, transformando-o em uma string 'join'
// ** Muda todas as letras do array para minúsculas 'toLowerCase'
// ** Busca pelas letras 'a' encontradas no array, e a cada find bem sucedido, incrementa 1 ao contador
// ** 

function containsA() {
  // escreva seu código aqui
  const arrayConjunto = names.join(' '); // Salva o array em uma variável arrayConjunto, separando cada palavra por Espaço
  // console.log(arrayConjunto); // [DEBUG] Verifica comportamento da variável arrayConjunto.
  const arrayMinusculo = arrayConjunto.toLowerCase();
  // console.log(arrayMinusculo); // [DEBUG] Verifica comportamento da função que transforma letras em minúsculas
  let contador = 0;
  for (let index = 0; index < arrayMinusculo.length; index +=1 ) {
    if (arrayMinusculo[index] === 'a') {
      contador += 1;
    }
  }
  return contador;
}
console.log(containsA()); // [DEBUG] Verifica comportamento da Função

// assert.deepStrictEqual(containsA(), 20);