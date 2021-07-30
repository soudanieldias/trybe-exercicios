//Utilizando o array criado no exercício anterior imprima o resultado da divisão
//de cada um dos elementos por 2 . 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

//Para o termo na posição 'number' dentro do array 'numbers'
//Faça ...
for (number in numbers)
{
    //Divisão de <VALOR> por 2: <VALOR/2>
    divisao = numbers[number]/2;
    console.log("Divisão de " + numbers[number] + "por 2: " + divisao );
}