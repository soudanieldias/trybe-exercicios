// 1. Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`;
const elementH1 = document.createElement('h1'); // Cria um Elemento h1
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM'; // Altera Conteúdo do elementH1
document.body.appendChild(elementH1); // Adiciona ao Body

// 2. Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
const elementMain = document.createElement('main'); // Cria elemento main
elementMain.className = 'main-content'; // Altera Class do elemento main
document.body.appendChild(elementMain); // Adiciona ao Body

// 3. Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
const elementSectionCenter = document.createElement('section'); // Cria section Central
elementSectionCenter.className = 'center-content'; // Altera Class para center-content
elementSectionMain.appendChild(elementsectionCenter); // Adiciona à sessão main

// 4. Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
const paragraph = document.createElement('p'); // Cria parágrafo
paragraph.innerHTML = 'Texto Show'; // Altera Texto do Parágrafo
elementsectionCenter.appendChild(paragraph); // Adiciona a sessão Central

// 5. Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
const elementsectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
elementMain.appendChild(elementsectionLeft); // Adiciona à sessão main

// 6. Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
const elementSectionRight = document.createElement('section');
elementSectionRight.className = 'right-content';
elementMain.appendChild(elementRight); // Adiciona à sessão main

// 7. Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
const elementImg = document.createElement('img'); // Cria tag da imagem
elementImg.className = 'small-image'; // Altera classe para small-image
elementImg.src = 'https://picsum.photos/200'; // Altera src da imagem
elementSectionLeft.appendChild(elementImg); // Adiciona img à sessão left

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um`, `dois`, `três`, ... como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
const elementUl = document.createElement('ul');
elementSectionRight.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = arrayNumbers[num];
  elementUl.appendChild(elementLi);
}

// 9. Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Show ' + index;
  elementMain.appendChild(elementH3);
}

// Segunda Parte

// 1.Adicione a classe title na tag h1 criada;
const title = document.querySelector('h1');
title.className = 'title';

// 2.Adicione a classe description nas 3 tags h3 criadas;
const elementsH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
  elementsH3[index].className = 'description';
}

// 3. Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
const sectionLeftContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionLeftContent);

// 4. Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight='auto';

// 5. Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

// 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();