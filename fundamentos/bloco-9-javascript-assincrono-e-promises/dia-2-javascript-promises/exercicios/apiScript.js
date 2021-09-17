// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  // Fazer uma requisição à API, através da URL
  // Manipular a response, verificando se a conexão falhou ou foi um sucesso
  // Trazendo o resultado da response ao elemento com determinada ID no site
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

//   fetch(API_URL, myObject);
  fetch(API_URL, myObject)
    // .then(response => console.log(response));
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => console.log(data.joke));



};

window.onload = () => fetchJoke();