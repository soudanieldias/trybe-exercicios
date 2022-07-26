/*
01-2 - Crie uma função que receba um número e retorne seu fatorial.
  Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
  Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/

function calculaFatorial(num) {
    let multFatorial = 1;
    for (let index = num; index > 1; index-= 1) {
        multFatorial = multFatorial * index;
        console.log(multFatorial);
    }
}
calculaFatorial(10);

const ternOp = num => num > 1 ? num * ternOp(num - 1) : 1;
let fatNum = 10
console.log(ternOp(fatNum));

