// Acesse a chave medals e faça um console.log no seguinte formato:
//"A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
};

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");