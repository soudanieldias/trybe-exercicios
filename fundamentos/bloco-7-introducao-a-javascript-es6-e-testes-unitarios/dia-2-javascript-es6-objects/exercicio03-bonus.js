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

const allLessons = (obj1, obj2, obj3) => Object.assign({}, {lesson1}, {lesson2}, {lesson3});
// console.log(allLessons(lesson1, lesson2, lesson3));

/*
  1- Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
  2- Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
*/

// 1- Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
const countMathStudents = allLessons => {

  // console.log(allLessons); // [DEBUG] Retorna o conjunto das 3 lessons

  for (key in allLessons) {
    console.log(` Valor ${key}: ${allLessons}`);
  }
}
countMathStudents(allLessons(lesson1, lesson2, lesson3));