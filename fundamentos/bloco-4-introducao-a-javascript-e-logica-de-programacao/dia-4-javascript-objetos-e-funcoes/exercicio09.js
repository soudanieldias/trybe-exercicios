/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .
*/
let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let maiorNome = teste[0];
let posicaomaiorNome = 0;
let name = '';

for (position in teste)
{
  if (teste[position].length >= maiorNome.length)
  {
    maiorNome = teste[position];
    posicaomaiorNumero = position;
  }
  else
  {

  }
}
console.log("Maior Nome: " + maiorNome);
console.log("Posição Maior Nome: " + posicaomaiorNome);