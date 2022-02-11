const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

// console.log('Hello, world!');
console.log("********** DADOS DO USUÁRIO **********");
console.log(`NOME: ${name}`);
console.log(`IDADE: ${age}`);

console.log(`Olá, ${name}! Você Possui ${age} anos!`);
