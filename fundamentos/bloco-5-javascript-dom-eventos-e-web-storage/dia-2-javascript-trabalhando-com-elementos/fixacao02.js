// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse terceiroFilho.

// Crie um irmão para elementoOndeVoceEsta.
let elementoOndeEstou = document.getElementById("elementoOndeVoceEsta"); // Adiciona caminho do elemento atual à uma variável
let elementoPai = elementoOndeEstou.parentNode; // Adiciona Caminho do Pai desse Elemento para Injetar elementoIrmao
// console.log("Elemento Pai: " + elementoPai); // [DEBUG] - Mostra o elementoPai

let elementoIrmao = document.createElement("section");
elementoIrmao.textContent = "Testando Adição de Conteúdo.";
elementoIrmao.id = "filhoAdicionadoAoFinal";
// console.log("Elemento Irmão: " + elementoIrmao.textContent); // [DEBUG] - Mostra o elementoIrmao

elementoPai.appendChild(elementoIrmao); // Adiciona elementoIrmao ao final da Section do elementoPai

// Crie um filho para elementoOndeVoceEsta.
let elementoFilhoDeOndeEstou = document.createElement("section");
elementoFilhoDeOndeEstou.textContent = "Testando elementoFilhoDeOndeEstou";
elementoFilhoDeOndeEstou.id = "filhoDeOndeEstou";
elementoOndeEstou.appendChild(elementoFilhoDeOndeEstou);

// Crie um filho para primeiroFilhoDoFilho.
let filhoDoPrimeiroFilhoDoFilho = document.createElement("section");
filhoDoPrimeiroFilhoDoFilho.textContent = "Adicionando o Filho Do Primeiro Filho do Filho";
filhoDoPrimeiroFilhoDoFilho.id = "filhoDoPrimeiroFilhoDoFilho";

primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
// console.log(filhoDoPrimeiroFilhoDoFilho); // [DEBUG]
// console.log(filhoDoPrimeiroFilhoDoFilho.id); // [DEBUG]
// console.log(filhoDoPrimeiroFilhoDoFilho.textContent); // [DEBUG]


// A partir desse filho criado, acesse terceiroFilho.

let filhoCriado = document.getElementById("filhoDoPrimeiroFilhoDoFilho");
// console.log(filhoCriado); // [DEBUG]
let paiDoFilhoCriado = filhoCriado.parentNode;
// console.log(paiDoFilhoCriado); // [DEBUG]
let avoDoFilhoCriado = paiDoFilhoCriado.parentNode;
// console.log(avoDoFilhoCriado); // [DEBUG]
let terceiroFilho = avoDoFilhoCriado.nextElementSibling;
 console.log(terceiroFilho); // [DEBUG]