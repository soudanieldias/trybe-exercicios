//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
//Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
//Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//  Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//  Um ângulo será considerado inválido se não tiver um valor positivo.

let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
let soma = ang1 + ang2 + ang3;

if (soma == 180)
{
    console.log("Triângulo Válido!\nValor: " + soma);
} else if (soma > 180 || soma < 180)
{
    console.log("Triângulo Inválido!\nValor: " + soma);
} else
{
    console.log("Valor Inválido!\nValor: " + soma);
}