/*
 * o Array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir.
 * Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
*/ 

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // array Inalterado

numerosPares = [numerosPares[3], numerosPares[4], numerosPares[5], numerosPares[6]];

console.log(numerosPares); // [6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo