const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

/*
  Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
*/

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  // Executa uma Arrow Function, que retorna true or false
  return books.every((book) =>
    // É feita a verificação, se não chegou ao fim do array a ser comparado
    !books.some((bookSome) =>
      // E, caso não, é comparado o ano de aniversário e o nome do autor dos elementos A & B
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
      // Se as duas condições forem satisfeitas, é retornado True, se não, False!
}

assert.strictEqual(authorUnique(), expectedResult);
assert.strictEqual(authorUnique(), expectedResult);