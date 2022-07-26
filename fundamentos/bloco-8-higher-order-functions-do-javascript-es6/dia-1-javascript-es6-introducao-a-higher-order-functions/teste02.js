const sayHello = () => { // É declarada uma arrowFunction
    return ('hello trybers'); // Que retorna o texto 'hello trybers"
  }
  
  const printGreeting = (callback) => { // É declarada uma arrowFunction que recebe um parâmetro
      console.log(callback()); // Esse parâmetro é retornado ao usuário, através do console.log(callback());
  }
  
  printGreeting(sayHello); // O parâmetro callback declarado, é a função sayHello, que tem seu conteúdo retornado ao usuário através do console.log() que a função que a chama, retorna