const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

const arrayASomar = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]; // Define o array a somar
console.log(sum(...arrayASomar)); // Joga todos os elementos a serem somados, como parâmetro da função sum