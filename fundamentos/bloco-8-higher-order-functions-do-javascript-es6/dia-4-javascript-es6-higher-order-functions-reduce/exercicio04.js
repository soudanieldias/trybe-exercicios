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

// Encontre o livro com o maior nome.

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

// LÓGICA DE RESOLUÇÃO:
// ** Varrer o array dos livros buscando pelos nomes
// ** Comparar os elementos de maior valor
// ** Retornar o Obj completo do elemento com aquele nome, contendo id, nome, genero, dados do autor, e ano de lançamento

function longestNamedBook() {
  // escreva seu código aqui
  const findLongestName = (maiorLivro, livroAtual) => { // Função findLongestName, que recebe accumulator, actualValue
    if (livroAtual.name.length > maiorLivro.name.length) { // Se o tamanho do nome do livro sendo comparado, for maior do que o anterior, o livro atual passa a ser o maior livro
      return livroAtual; // Atribui o obj livro atual ao actualValue
    }
    return maiorLivro; // Se não, mantém o obj anterior ao comparado imutável, como sendo o maior livro
  };
  return reduceBook = books.reduce(findLongestName);
}
// console.log( longestNamedBook() ); // [DEBUG] Verifica livro retornado pela função longestNamedBook
assert.deepStrictEqual(longestNamedBook(), expectedResult);