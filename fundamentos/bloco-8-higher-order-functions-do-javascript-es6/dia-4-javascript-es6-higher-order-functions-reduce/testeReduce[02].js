const numbers = [32, 15, 3, 2, -5, 56, 10, 'l'];

const sumNumbers = numbers.reduce((result, number, index) => {
    if (isNaN(number)) {
        return `ERRO! O elemento '${number}' da posição ${index} do array não é um número!!!
        \nResultado Armazenado Até o Momento no Reduce: ${result}`;
    }
    return result + number;
});
console.log(sumNumbers);