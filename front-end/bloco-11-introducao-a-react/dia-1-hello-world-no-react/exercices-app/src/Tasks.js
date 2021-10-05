const taskList =
[
    'Acordar',
    'Escovar os Dentes',
    'Tomar Café da Manhã',
    'Se organizar para o dia',
    'Almoçar',
    'Assistir a Aula',
    'Lanche da Tarde',
    'Jantar',
    'Escovar os Dentes',
    'Dormir'
];

const Task = (value) => {
  return (
    `<li>${value}</li>`
  );
};

// const listaOrganizada = listaTarefas.sort();
// console.log(listaOrganizada);
const createLi = taskList.map( (theTask) => {
  return Task(theTask);
});
console.log(createLi);