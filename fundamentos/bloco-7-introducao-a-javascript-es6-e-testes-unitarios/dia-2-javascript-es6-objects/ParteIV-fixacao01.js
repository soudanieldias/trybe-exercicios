const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  let result = Object.assign(person, info, family);
//   console.log(`${result}`); // Imprime tipo do Objeto
  console.log(result);
//   console.log(`${person}`); // Imprime tipo do Objeto
  console.log(person);
//   console.log(`${info}`); // Imprime tipo do Objeto
  console.log(info);
//   console.log(`${family}`); // Imprime tipo do Objeto
  console.log(family);

  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */