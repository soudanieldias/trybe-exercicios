//Faça um programa que retorne o maior de dois números.
//Defina no começo do programa duas variáveis com os valores que serão comparados. 

let num1 = 14;
let num2 = 29;

if (num1 > num2)
{
    console.log("Número 1 maior que Número 2: Número >>> " + num1);
}
else if (num2 > num1)
{
    console.log("Número 2 maior que Número 1: Número >>> " + num2);
}
else {
    console.log("Erro: Números IGUAIS ou termo INVÁLIDO!!!\nNúmero 1:" + num1 + "\nNúmero 2:" + num2);
}