// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse terceiroFilho.

// Crie um irmão para elementoOndeVoceEsta.
let elementoOndeEstou = document.getElementById("elementoOndeVoceEsta"); // Adiciona caminho do elemento atual à uma variável
let elementoPai = elementoOndeEstou.parentNode; // Adiciona Caminho do Pai desse Elemento para Injetar elementoIrmao
console.log("Elemento Pai: " + elementoPai); // [DEBUG] - Mostra o elementoPai

let elementoIrmao = document.createElement("section");
elementoIrmao.textContent = "Testando Adição de Conteúdo.";
elementoIrmao.id = "filhoAdicionadoAoFinal";
console.log("Elemento Irmão: " + elementoIrmao.textContent);

elementoPai.appendChild(elementoIrmao); // Adiciona elementoIrmao ao final da Section do elementoPai

// Crie um filho para elementoOndeVoceEsta.


// Crie um filho para primeiroFilhoDoFilho.


// A partir desse filho criado, acesse terceiroFilho.

