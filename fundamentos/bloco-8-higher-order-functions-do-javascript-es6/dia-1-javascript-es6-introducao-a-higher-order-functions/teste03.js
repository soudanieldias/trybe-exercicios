const sumFixAmount = (amount) => { // A função sumFixAmount recebe um amount
    return (number) => amount + number; // E retorna o valor desse amount, mais o number declarado para a variável initialSum
  }
  
  const initialSum = sumFixAmount(15) // Chama a variável que roda função com '15'.
  console.log(initialSum(5)); // Retorna o resultado dessa função de soma, quando o valor inicial de initialSum é 5 // RETURN: 20

  console.log(initialSum(15));// Retorna o resultado dessa função de soma, quando o valor inicial de initialSum é 15 // RETURN: 30