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

  const checkWord = (acumulator, current) => { // Função que verifica Palavra
    if (current === 'a' || current === 'A') return acumulator + 1; // Se palavra contém 'a' ou 'A', incrementa o acumulator
    return acumulator; // Enquanto não encontrar a letra A/a, Retorna o Accumulator imutável
 };

  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce(checkWord, 0), 0);
}
// console.log(containsA()); // [DEBUG] Verifica comportamento da Função

assert.deepStrictEqual(containsA(), 20);