// fixacaoHOF01
// Estruturando uma HOF (Parãmetros são passados dinamicamente)

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
repeat(5, console.log); // Executa função repeat até o valor de number (5) ser satisfeito, e define action a cada iteração do laço for, como sendo console.log.