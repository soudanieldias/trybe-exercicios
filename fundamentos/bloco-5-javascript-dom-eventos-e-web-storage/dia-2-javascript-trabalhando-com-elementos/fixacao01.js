// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.
/********************************************************************/

// Acesse o elemento elementoOndeVoceEsta.
let elementoOndeEstou = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeEstou); // Acessa elementoOndeVoceEsta
// console.log(elementoOndeEstou.innerHTML); // Acessa conteúdo de elementoOndeVoceEsta como HTML

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let elementoPai = elementoOndeEstou.parentElement;
// console.log(elementoPai); // Acessa elemento Pai
elementoPai.style.color = "red";













