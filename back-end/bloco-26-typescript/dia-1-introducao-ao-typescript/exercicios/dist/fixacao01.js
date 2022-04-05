"use strict";
/*
 * Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
 * Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
 * Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
 * Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
 */
// Dias da Semana
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["segunda"] = 0] = "segunda";
    diasDaSemana[diasDaSemana["terca"] = 1] = "terca";
    diasDaSemana[diasDaSemana["quarta"] = 2] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 3] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 4] = "sexta";
    diasDaSemana[diasDaSemana["sabado"] = 5] = "sabado";
    diasDaSemana[diasDaSemana["domingo"] = 6] = "domingo";
})(diasDaSemana || (diasDaSemana = {}));
console.log(`********** ENUM Dias Da Semana **********`);
console.log(diasDaSemana);
console.log('**********');
// Cores Arco-íris
var arcoIris;
(function (arcoIris) {
    arcoIris[arcoIris["vermelho"] = 0] = "vermelho";
    arcoIris[arcoIris["laranja"] = 1] = "laranja";
    arcoIris[arcoIris["amarelo"] = 2] = "amarelo";
    arcoIris[arcoIris["verde"] = 3] = "verde";
    arcoIris[arcoIris["azul"] = 4] = "azul";
    arcoIris[arcoIris["anil"] = 5] = "anil";
    arcoIris[arcoIris["violeta"] = 6] = "violeta";
})(arcoIris || (arcoIris = {}));
console.log(`********** ENUM Arco-íris **********`);
console.log(arcoIris);
console.log('**********');
