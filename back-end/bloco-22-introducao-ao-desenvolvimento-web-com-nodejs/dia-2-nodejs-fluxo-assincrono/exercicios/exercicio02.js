/**
 * Escreva um código para consumir a função construída no exercício anterior.
 *  Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
 *  Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
 *  Utilize then e catch para manipular a Promise retornada pela função:
 *    Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
 *    Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
 */

 function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }
    console.log('Resolvendo...');
    return resolve(result);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  console.log('Executando domath');
  doMath(...randomNumbers)
  .then(result => console.log(`Resultado: ${result}`))
  .catch(err => console.error(`Erro: ${err.message}`))
}

console.log('********** Retorno da Função **********');
console.log(callDoMath());
console.log('********** Retorno da Função **********');