/*
  Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
  Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
  Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
  Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
  Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
  Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
*/

var fs = require("fs");

fs.readFile("./simpsons.json" , "utf8", function formatData(err, data) {
  if(err) {
    return console.log("Erro ao ler arquivo");
  }
  var jsonData = JSON.parse(data); // faz o parse para json

  // console.log(jsonData);
  jsonData.map( (data) => {
    console.log(`${data.id} - ${data.name}`);
  })
})