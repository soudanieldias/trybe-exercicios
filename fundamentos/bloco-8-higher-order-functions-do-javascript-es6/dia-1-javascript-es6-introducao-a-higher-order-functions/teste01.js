function sum (number1, number2) { // Uma função de soma, que recebe 2 parâmetros
    return number1 + number2; // E retorna a soma dos dois
  }
  
  const sumVariable = sum; // Essa função é salva em uma variável, ou seja, cada vez que a variável é consultada, o valor armazenado nela é o equivalente ao executado e retornado pela função.
  
  console.log(sumVariable);
  //  [Function: sum]

  const sum = (number1, number2) => { // Função executadaa utilizando arrow function
    return number1 + number2; // Retorna o valor da soma de number1 + number2, e o armazena na variável sum, que também é uma função.
  };