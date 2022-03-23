import React from 'react';

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
    <li key={value}>{value}</li>
  );
}

class TasksClass extends React.Component {
  render() {
    return (
      <ul>{ taskList.map( theTask => Task(theTask)) }</ul>
    );
  }
}

export default TasksClass;
