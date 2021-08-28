//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

//Para o termo na posição 'number' dentro do array 'numbers'
//Faça ...
for (number in numbers)
{
    //Termo <POSIÇÃO>: <VALOR>
    console.log("Termo " + number + ": " + numbers[number] );
}