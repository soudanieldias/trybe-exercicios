/*
Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

function somaNumeros(numeros)
{
  let soma = 0;
  for (let index = 1; index <= numeros; index++)
  {
    soma += index;
  }
  return soma;
}
console.log( somaNumeros(5) ); //15