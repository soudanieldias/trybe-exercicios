const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

const arrayASomar = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
console.log(sum(...arrayASomar));