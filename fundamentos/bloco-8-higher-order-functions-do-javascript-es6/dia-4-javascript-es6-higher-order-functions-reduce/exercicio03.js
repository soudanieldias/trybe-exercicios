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

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados
// LÓGICA PARA RESOLUÇÃO:
// ** Calcular a idade de cada um dos autores durante o lançamento do livro, e jogar em um array [MAP]
// ** Fazer a média de idade desse array e jogar em uma variável com reduce

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const getSum = (a, b) => a + b;
  const arrayMap = books.map( (book) => (book.releaseYear - book.author.birthYear));
  // console.log(arrayMap); // [DEBUG] Verifica valores no arrayMap
  // Verifica a idade dos autores na data de lançamento de seus livros

  const sumAge = () => arrayMap.reduce(getSum, 0);
  // Cria um array Reduzido com a soma dos números
  // console.log(`Valor sumAge: `, sumAge()); // [DEBUG] Verifica Valor no sumAge

  const tamanhoArray = arrayMap.length; // Guarda tamanho do array com idade dos Autores
  // console.log(`Tamanho do Array: `, tamanhoArray) // [DEBUG] Verifica Tamanho do Array

  const media = sumAge() / tamanhoArray; // Calcula a média
  // console.log(`Valor da Média: `, media); // [DEBUG] Verifica Valor da Média
  // const sumNumbers = arrayAge.reduce(getSum, 0);
  return media;
}

// console.log(averageAge()); // [DEBUG] Verifica retorno da Função
assert.strictEqual(averageAge(), expectedResult);