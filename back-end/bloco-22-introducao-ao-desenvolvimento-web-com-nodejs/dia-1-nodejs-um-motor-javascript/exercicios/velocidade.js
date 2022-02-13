const readLine = require('readline-sync');

function calcVel() {
  const distancia = readLine.questionInt('Digite a Distância em Metros: ');
  const tempo = readLine.questionInt('Digite o Tempo em Segundos: ');

  const velocidade = distancia / tempo;
  return velocidade;
}

console.log(`A velocidade atingida foi a de ${calcVel()} m/s`);
