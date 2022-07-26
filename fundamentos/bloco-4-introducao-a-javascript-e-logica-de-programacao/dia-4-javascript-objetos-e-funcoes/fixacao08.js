//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b,
//definidas no começo com os valores que serão operados. Faça programas para:

/*
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

let a = 10;
let b = 20;

function sum (termo1, termo2)
{
  let operacao = termo1 + termo2;
  return operacao;
}
function sub (termo1, termo2)
{
  let operacao = termo1 - termo2;
  return operacao;
}
function mult (termo1, termo2)
{
  let operacao = termo1 * termo2;
  return operacao;
}
function div (termo1, termo2)
{
  let operacao = termo1 / termo2;
  return operacao;
}
function mod (termo1, termo2)
{
  let operacao = termo1 % termo2;
  return operacao;
}
console.log("Termo A: " + a + "\nTermo B: " + b );
console.log("Operação de Soma: " + sum(a, b) );
console.log("Operação de Subtração: " + sub(a, b) );
console.log("Operação de Multiplicação: " + mult(a, b) );
console.log("Operação de Divisão: " + div(a, b) );
console.log("Operação de Módulo: " + mod(a, b) );