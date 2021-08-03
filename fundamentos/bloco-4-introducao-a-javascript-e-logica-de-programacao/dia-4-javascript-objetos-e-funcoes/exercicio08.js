/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    Valor esperado no retorno da função: 6 .
    */

    let arrayTeste = [2, 3, 6, 7, 10, 1];

let menorNumero = arrayTeste[0];
let posicaomenorNumero;

for (number in arrayTeste)
{
  if (arrayTeste[number] <= menorNumero)
  {
    menorNumero = arrayTeste[number];
    posicaomenorNumero = number;
  }
  else
  {

  }
}
console.log("Menor Número: " + menorNumero);
console.log("Posição Menor Número: " + posicaomenorNumero);