/*
 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
 Modifique a estrutura da função para que ela seja uma arrow function.
 Modifique as concatenações para template literals.
*/
// const testingScope = escopo => {
    // if (escopo === true) {
    //   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    //   ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    //   console.log(`RESULTADO TRUE: ${ifScope}`);
    // } else {
    //   const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    //   console.log(`RESULTADO FALSE: ${elseScope}`);
    // }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
    // Converte a função if/else para uma ternary operator!
// 
  // }
  // testingScope(false);
  let escopo = true;
  const testingScopeTrue = (escopo === true) ? `Escopo é: True` : `Escopo é: False` // 1º termo é 'printado' quando a condição analizada é verdadeira. (ESCOPO POSSUIR VALOR TRUE)
  console.log(testingScopeTrue);

  escopo = false;
  const testingScopeFalse = (escopo === false) ? `Escopo é: False` : `Escopo é: True` // 1º termo é 'printado' quando a condição analizada é verdadeira. (ESCOPO POSSUIR VALOR FALSE)
  console.log(testingScopeFalse);