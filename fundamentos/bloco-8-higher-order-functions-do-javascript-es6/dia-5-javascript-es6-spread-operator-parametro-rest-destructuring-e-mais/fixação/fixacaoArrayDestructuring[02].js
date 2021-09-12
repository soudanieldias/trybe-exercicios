/*
  A seguir, temos alguns valores que estão descritos em variáveis incoerentes.
  Através da desestruturação de arrays, corrija os valores das variáveis. 
*/

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(`Variáveis inalteradas:\nComida: ${comida}\nAnimal: ${animal}\nBebida: ${bebida}`); // arroz gato água

let aux = comida;
comida = bebida;
bebida = animal;
animal = aux;

console.log(`Variáveis Alteradas:\nComida: ${comida}\nAnimal: ${animal}\nBebida: ${bebida}`); // arroz gato água


// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo