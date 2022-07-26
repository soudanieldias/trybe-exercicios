function getNumber() {
    const randomNumber = Math.round(Math.random() * 10);
    if (randomNumber >=6){
        return `OK! NÚMERO NO INTERVALO ESPERADO: ${randomNumber}`;
    } else {
        return `VALOR ABAIXO DO ESPERADO: ${randomNumber}`;
    }
    return randomNumber;
}
console.log(getNumber());