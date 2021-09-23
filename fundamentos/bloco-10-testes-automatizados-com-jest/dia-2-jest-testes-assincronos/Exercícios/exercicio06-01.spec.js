/**
 * Adicione uma funcionalidade para buscar pelo nome do animal
 *  (crie uma função que deverá passar no teste abaixo).
 * Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.
 */

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        };
  
        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 100);
    })
  );
  
  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
  );
