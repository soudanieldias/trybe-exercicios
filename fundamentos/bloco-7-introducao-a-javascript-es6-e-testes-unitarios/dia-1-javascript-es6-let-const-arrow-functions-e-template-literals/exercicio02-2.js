/*
Crie uma função que receba uma frase e retorne qual a maior palavra.
*/
// PASSO LÓGICO PARA RESOLUÇÃO:
// ** Receber Frase
// ** Separar Palavras em um array
// ** Fazer uma estrutura for para comparar palavra por palavra desse Array através do length.
// ** Guardar a maior Palavra em uma variável.
// ** Retornar essa Palavra e seu Lenght

function recebeFrase(frase) {
  /* Função principal que recebe a Frase e se encarrega de chamar às demais funções para execução do processo. */
  console.log(`Frase recebida e Salva: '${frase}'`); // [DEBUG]
  const fraseSalva = frase;
  console.log(`Frase Salva: ${fraseSalva}`);
  separaPalavras(fraseSalva);
}
let frase = "O rato roeu a Roupa do Rei de Roma";
recebeFrase(frase);

function separaPalavras(fraseSalva) {
  /* Separa Palavras e as coloca dentro de um array */
  let arrayFrase = fraseSalva.split(' ');
  console.log(`Array com Frase: ${arrayFrase}`);
  verificaTamanho(arrayFrase);
}

function verificaTamanho(arrayFrase) {
  /*
    1. Recebe esse array de palavras, e através de um for verifica a maior palavra dentro do mesmo;
    2. Salva a palavra dentro da variável maiorPalavra;
  */
  let maxLength = 0;
    for (const palavra in arrayFrase) {
      if (palavra.length > maxLength) {
          maxLength = palavra.length;
          result = palavra;
          console.log(`Maior Palavra: ${result}\nTamanho da Palavra: ${palavra}`);
      }
      return result;
  }
  
}
