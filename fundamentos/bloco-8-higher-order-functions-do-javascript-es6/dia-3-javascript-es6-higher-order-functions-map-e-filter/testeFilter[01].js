// console.log("TESTE 1");
// console.log("TESTE 2");
// console.log("TESTE 3");
// console.log("TESTE 4");
// console.log("TESTE 5");
// console.log("TESTE 6");
// console.log("TESTE 7");
// console.log("TESTE 8");
// console.log("TESTE 9");
// console.log("TESTE 10");
// console.log("TESTE 11");
// console.log("TESTE 12");
// console.log("TESTE 13");
// console.log("TESTE 14");
// console.log("TESTE 15");
// console.log("TESTE 16");
// console.log("TESTE 17");
// console.log("TESTE 18");
// console.log("TESTE 19");
// console.log("TESTE 20");

// Cria-se um Array
const arrayDeElementos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// Armazena a função filter, que retorna true cada vez que a função for satisfeita, em uma variável
// Juntamente desse true, é armazenado o elemento da posição em formato de array
const resultadoFilter = arrayDeElementos.filter( (elemento) => elemento > 5); 

// É executado o console.log do array resultadoFilter
console.log(resultadoFilter);

// É testado o forEach para 
resultadoFilter.forEach( (element) => console.log(element) );