// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

// 1 - Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!'
// wakeUp(); // [DEBUG]

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const timeToCoffee = () => 'Bora tomar café!!'
// timeToCoffee(); // [DEBUG]

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const timeToSleep = () => 'Partiu dormir!!'
// timeToSleep(); // [DEBUG]

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que
// imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
const doingThings = (func1, func2, func3) => {
    console.log(func1);
    console.log(func2);
    console.log(func3);
}
doingThings(wakeUp(), timeToCoffee(), timeToSleep());

