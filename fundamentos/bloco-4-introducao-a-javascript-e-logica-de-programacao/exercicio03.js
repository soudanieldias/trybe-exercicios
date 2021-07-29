//Faça um programa que retorne o maior de três números.
//Defina no começo do programa três variáveis com os valores que serão comparados.

let num1 = 30;
let num2 = 30;
let num3 = 20;

if (num1 > num2 && num1 > num3)
{
    console.log("Número 1 é maior dentre os 3!\nNúmero 1: " + num1 + "\nNúmero 2: " + num2 + "\nNúmero 3: " + num3);
}
else if (num2 > num1 && num2 > num3)
{
    console.log("Número 2 é maior dentre os 3!\nNúmero 1: " + num1 + "\nNúmero 2: " + num2 + "\nNúmero 3: " + num3);
}
else if (num3 > num1 && num3 > num2)
{
    console.log("Número 3 é maior dentre os 3!\nNúmero 1: " + num1 + "\nNúmero 2: " + num2 + "\nNúmero 3: " + num3);
}
else
{
    console.log("ATENÇÃO: Um ou mais números são iguais!\nNúmero 1: " + num1 + "\nNúmero 2: " + num2 + "\nNúmero 3: " + num3);
}