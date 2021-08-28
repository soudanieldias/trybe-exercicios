//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//  Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//  Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//  Exemplo: bishop (bispo) -> diagonals (diagonais)
/*
REFERÊNCIA UTILIZADA: https://www.ludijogos.com/multiplayer/xadrez/regras/
*/

let xadrezPiece = "bispo";

switch (xadrezPiece.toLowerCase())
{
    case 'rei':
        console.log("Rei ->> Todas direções, uma casa por vez.");
        break;

    case 'rainha':
        console.log("Rainha ->> Move-se em todas as direções, mas não pula outras peças.");
        break;

    case 'bispo':
        console.log("Bispo ->> Move-se na diagonal, mas não pula outras peças.");
        break;

    case 'cavalo':
        console.log("Cavalo ->> Movimenta-se em L, para qualquer direção.");
        break;

    case 'torre':
        console.log("Torre ->> Move-se na Vertical/Horizontal, mas não pula outras peças.");
        break;

    case 'peão':
        console.log("Peão ->> Move-se uma casa a frente, e apenas captura peças em sua diagonal");
        break;

    default:
        console.log("PEÇA INVÁLIDA!!!");
        break;
}