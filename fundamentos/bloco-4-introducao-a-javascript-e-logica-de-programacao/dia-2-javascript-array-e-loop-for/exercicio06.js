//Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
impar = 0;
    for (number of numbers)
    {
        if ( (number%2) != 0 )
        {
            console.log("Número ímpar Encontrado: " + number);
            impar += 1;
        }
        else
        {
            console.log("Número par Encontrado: " + number);
        }
    }

if (impar >= 1 )
{
    console.log(impar + " número(s) ímpar(es) encontrado(s)");
} else
{
    console.log(impar + " número(s) ímpar(es) encontrado(s)");
}