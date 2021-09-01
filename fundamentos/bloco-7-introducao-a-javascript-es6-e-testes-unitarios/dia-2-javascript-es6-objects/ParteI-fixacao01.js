/*
- Para praticar, crie uma função que receba três parâmetros, sendo eles:
    Um objeto;
    o nome de uma chave e o seu valor
- O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. 
*/

const peopleObj = {
    // Objeto Vazio
}


function setParams (objName, objValue, keyValue) {
  // Recebe 3 tipos de parâmetro e Joga dentro do object
  objName[objValue] = keyValue;
  console.log (peopleObj);
  return peopleObj;
}
setParams(peopleObj, "nome", "Daniel Dias");
// A função setParams chama o nome do obj a ser manipulado
// Seta a chave a ser Adicionada
// Seta o valor da chave a ser Adicionado