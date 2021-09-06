// Crie uma HOF que receberá três parâmetros.
// O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas
// a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as
// respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.
// Ao final a HOF deve retornar o total da contagem de respostas certas.
// *** Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
// e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countCorrect = (rigAns, studAns, callack) => { // countCorrect Recebe Gabarito, Prova e função callBack
    let counter = 0; // Declara contador de acertos como 0
    for (index = 0; index < rigAns.length; index += 1) {
        // Faz um loop for que percorre o array, comparando o elemento x do gabarito com o elemento x do aluno
        const callBackReturn = callback(rigAns[index], studAns[index]);
        // Guarda em uma variável o returno da função dinâmica a ser utilizada para contagem
        counter += callBackReturn;
    }
    return `Resultado final: ${contador} corretas`;
};
const newHof = () => {

}
console.log( newHof(RIGHT_ANSWERS, STUDENT_ANSWERS, callback) );

