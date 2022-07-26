//Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var min = numbers.reduce(
    function(a, b)
    {
        return Math.min(a, b);
    }
);

console.log("Menor termo: " + min);