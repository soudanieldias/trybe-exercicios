const readline = require('readline-sync');

function calcIMC() {
  const peso = readline.questionFloat('Digite o seu peso no Formato 60.89: ');
  const altura = readline.questionFloat('Digite a sua altura no Formato 1.65: ');
  const imcResult = peso / Math.pow(altura, 2);
  printResult(imcResult);
}

function printResult(imc) {
  console.log(`Seu IMC é de: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  } else if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  } else if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  } else if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  } else {
    console.log('Situação: Obesidade graus III e IV');
  }
}
calcIMC();