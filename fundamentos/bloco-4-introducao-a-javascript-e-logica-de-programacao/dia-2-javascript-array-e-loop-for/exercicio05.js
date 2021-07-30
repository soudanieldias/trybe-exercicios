//Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*var max = Math.max(numbers);
*/

var max = numbers.reduce(
    function(a, b)
    {
        return Math.max(a, b);
    }
);

console.log("Maior termo: " + max);