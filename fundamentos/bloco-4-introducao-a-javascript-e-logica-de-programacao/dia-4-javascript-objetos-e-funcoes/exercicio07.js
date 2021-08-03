/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .
*/

let arrayTeste = [2, 3, 6, 7, 10, 1];

// for (number in arrayTeste)
// {
//   let maiorNumero = 0;

//   let posicaoMaiorNumero = arrayTeste[number];
//   console.log("Maior Número: " + maiorNumero);
// }
let maiorNumero = null;
let posicaomaiorNumero = null;

for (number in arrayTeste)
{
  if (arrayTeste[number] >= maiorNumero)
  {
    maiorNumero = arrayTeste[number];
    posicaomaiorNumero = number;
  }
  else
  {

  }
}
console.log("Maior Número: " + maiorNumero);
console.log("Posição Maior Número: " + posicaomaiorNumero);