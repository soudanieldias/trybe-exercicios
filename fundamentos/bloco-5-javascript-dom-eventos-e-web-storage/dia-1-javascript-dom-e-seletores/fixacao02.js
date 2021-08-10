// Adicione uma classe igual para os dois parágrafos.
// Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
// Altere algum estilo do primeiro deles.
// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

// console.log( document.getElementsByClassName("paragrafos") );

const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const conteudoParagrafos = document.getElementsByClassName("paragrafos");
console.log(conteudoParagrafos);

const paragrafo1 = document.getElementsByClassName("paragrafos")[0];

paragrafo1.style.fontFamily = "Arial";