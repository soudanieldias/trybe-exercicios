//  Desenvolva uma HOF que retorna o resultado de um sorteio.
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros
// o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkRandomNumber = (num1, num2) => {
    if (num1 === num2) {
        return 'Parabéns, você ganhou';
    } else {
        return 'Tente novamente';
    }
}

const sorteioResult = (numeroApostado, callBack) => {
  // Essa função gera um número aleatório, entre 1-5
  let randomNumber = Math.floor(Math.random() * (5 - 1)) + 1; // Math.random() * (max - min) + min;
  // console.log(randomNumber);
  // Também recebe como parâmetro o número Apostado
  // Executa função que checa se o Número Apostado foi sorteado
  return callBack(numeroApostado, randomNumber);
}
console.log(sorteioResult(3, checkRandomNumber));