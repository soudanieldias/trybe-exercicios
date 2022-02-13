const readline = require('readline-sync');

function randomNumber(min = 1, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min) ) + min);
}

// let resultNumber = randomNumber(1, 10);
const resultNumber = randomNumber();
const choosedNumber = readline.questionInt('Digite um número entre 1 e 10: ');


function checkResult(choosedNumber, resultNumber) {
  if (choosedNumber === resultNumber) return "Você acertou!";
  return "Errou!";
}

console.log(checkResult(choosedNumber, resultNumber));
