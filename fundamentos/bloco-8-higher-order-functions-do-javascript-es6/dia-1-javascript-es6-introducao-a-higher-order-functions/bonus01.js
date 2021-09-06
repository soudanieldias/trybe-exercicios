/*
Crie uma função que retorna o dano do dragão.
  *** O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
*/

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const calcDamage = (callback) => {
  const newDamage = Math.floor(Math.random() * (callback.strength - 15)) + 15;
  return newDamage;
}
console.log( calcDamage(dragon) );