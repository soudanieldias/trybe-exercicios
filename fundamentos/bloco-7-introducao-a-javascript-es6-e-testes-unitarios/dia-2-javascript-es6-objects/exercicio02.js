const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

/*
  1- Crie uma função para adicionar o turno da manhã na lesson2.
  => Essa função deve possuir três parâmetros, sendo eles: 
    o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  2- Crie uma função para listar as keys de um objeto.
  => Essa função deve receber um objeto como parâmetro.
  3- Crie uma função para mostrar o tamanho de um objeto.
  4- Crie uma função para listar os valores de um objeto.
  => Essa função deve receber um objeto como parâmetro.
  5- Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
=> Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
*/

// 1- Crie uma função para adicionar o turno da manhã na lesson2.
let setParams = (objName, objKey, keyValue) => objName[objKey] = keyValue;
// console.log(setParams(lesson2, 'turno', 'manhã'));

// 2- Crie uma função para listar as keys de um objeto.
let listKeys = objName => `Keys do Object: ${Object.keys(objName)}`;
// console.log(listKeys(lesson3));

// 3- Crie uma função para mostrar o tamanho de um objeto.
let objLenght = objName =>  `Tamanho: ${Object.keys(objName).length}`;
// console.log(objLenght(lesson1));

// 4- Crie uma função para listar os valores de um objeto.
let listValues = objName => `Values do Object: ${Object.values(objName)}`;
// console.log(listValues(lesson3));

// 5- Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
let allLessons = (obj1, obj2, obj3) => Object.assign({}, {obj1}, {obj2}, {obj3});
// console.log(allLessons(lesson1, lesson2, lesson3));

// 6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 
let totalAlunos = allLessons => {
    let totalDeAlunos = 0;
    for (value in allLessons) {
        totalDeAlunos += allLessons[value].numeroEstudantes;
        // console.log(`${allLessons[value].numeroEstudantes}`); // [DEBUG]
    }
    console.log(`Total de Alunos: ${totalDeAlunos}`);
};
let functionAllLessons = allLessons(lesson1, lesson2, lesson3);
// totalAlunos(functionAllLessons);

// 7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
let getValueByNumber = (objName, keyPosition) => console.log(Object.keys(objName)[keyPosition]);
// getValueByNumber(lesson1, 3);

/*
8- Crie uma função que verifique se o par (chave / valor) existe na função.
 -> Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
*/
let checkPair = (obj, key, value) => {

  if (key in obj) {
    // console.log(obj[key]);
    if (obj[key] === value) {
      console.log(`True`);
    } else {
        console.log(false);
    }
  } else {
    console.log(false);
  }
}
checkPair(lesson1, 'numeroEstudantes', 20);