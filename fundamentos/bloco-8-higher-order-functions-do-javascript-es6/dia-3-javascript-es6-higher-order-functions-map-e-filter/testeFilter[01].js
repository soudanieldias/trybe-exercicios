// Cria-se um Array
const arrayDeElementos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// Armazena a função filter, que retorna true cada vez que a função for satisfeita, em uma variável
// Juntamente desse true, é armazenado o elemento da posição em formato de array
const resultadoFilter = arrayDeElementos.filter( (elemento) => elemento > 5); 

// É executado o console.log do array resultadoFilter
console.log(resultadoFilter);

// É testado o forEach para 
resultadoFilter.forEach( (element) => console.log(element) );