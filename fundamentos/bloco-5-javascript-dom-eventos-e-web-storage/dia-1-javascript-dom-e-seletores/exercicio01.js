/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
[X]Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
[X]Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
[X]Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

const tagP = document.getElementsByTagName("p");
tagP[0].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius magna enim, sit amet vulputate. ";

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
const corDoMain = document.getElementsByClassName("main-content");
corDoMain[0].style.backgroundColor = "rgb(76,164,109)";

// Crie uma função que mude a cor do quadrado vermelho para branco.
const corDoChild = document.getElementsByClassName("center-content");
corDoChild[0].style.backgroundColor = "white";