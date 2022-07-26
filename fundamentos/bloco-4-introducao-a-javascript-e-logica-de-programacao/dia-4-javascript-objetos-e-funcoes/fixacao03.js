// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas
//em que a jogadora Marta foi considerada a melhor do mundo.
// [2006, 2007, 2008, 2009, 2010, 2018]

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
};

console.log("A jogadora " + player.name + " " + player.lastName + " Possui " + player.age + " anos de idade.");

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];