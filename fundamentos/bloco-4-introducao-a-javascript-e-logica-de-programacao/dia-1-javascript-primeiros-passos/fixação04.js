//
// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

let estado_candidato = 4;

switch (estado_candidato) {

    case 1:
        console.log("Parabéns, você foi aprovado!");
        break;
    case 2:
        console.log("Você está na nossa lista de espera.");
        break;
    case 3:
        console.log("Você foi Reprovado!");
        break;
    default:
        console.log("Não se Aplica!");
        break;
}