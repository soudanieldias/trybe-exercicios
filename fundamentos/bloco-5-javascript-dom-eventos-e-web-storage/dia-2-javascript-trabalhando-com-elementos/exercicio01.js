// PARTE 01:
// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
// Adicione a tag main com a classe main-content como filho da tag body;
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

// PARTE 02:
// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

// PARTE 01:

// 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const elementoH1 = document.createElement('h1');
elementoH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementoH1);

// 2 Adicione a tag main com a classe main-content como filho da tag body;
const elementoMain = document.createElement('main');
elementoMain.className = "main-content";
elementoMain.innerText = "main-content///Filho da Body";
document.body.appendChild(elementoMain);

// 3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const tagSectionCenter = document.createElement('section');
tagSectionCenter.className = "center-content";
tagSectionCenter.innerText = "section///center-content";
elementoMain.appendChild(tagSectionCenter);

// 4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagP.textContent = "Texto da tagP";
tagSectionCenter.appendChild(tagP);


// 5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const tagSectionLeft = document.createElement('section');
tagSectionLeft.className = "left-content";
tagSectionLeft.innerText = "section///left-content";
elementoMain.appendChild(tagSectionLeft);


// 6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const tagSectionRight = document.createElement('section');
tagSectionRight.className = "right-content";
tagSectionRight.innerText = "section///right-content";
elementoMain.appendChild(tagSectionRight);


// 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const imgSrc = document.createElement('img');
imgSrc.className = "small-image";
imgSrc.src = "https://picsum.photos/200";
tagSectionLeft.appendChild(imgSrc);

// 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const ulList = document.createElement('ul');
tagSectionRight.appendChild(ulList);
const arrayDeNumeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez']
  for (let num in arrayDeNumeros) {
    const elementoLi = document.createElement('li');
    elementoLi.innerHTML = arrayDeNumeros[num];
    ulList.appendChild(elementoLi);
  }

// 9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
    const tagsH3 = document.createElement('h3');
    tagsH3.innerHTML = 'Show ' + index;
    elementoMain.appendChild(tagsH3);
}

// PARTE 02:
// Adicione a classe title na tag h1 criada;
elementoH1.className = "title";

// Adicione a classe description nas 3 tags h3 criadas;
const elementosH3 = document.getElementsByTagName('h3');
// console.log(elementosH3[0]);
// console.log(elementosH3[1]);
// console.log(elementosH3[2]);
// console.log(elementosH3.length);
for  (let index = 0; index < elementosH3.length; index += 1) {
    elementosH3[index].className = "description";
}

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;



// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;



// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;



// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.


