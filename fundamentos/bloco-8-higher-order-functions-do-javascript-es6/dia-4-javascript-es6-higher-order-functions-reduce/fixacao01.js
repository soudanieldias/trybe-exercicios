const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

/*
  Crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior,
  para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor.
  Você usará tanto o map quanto, dentro dele, o reduce!
*/

const getBestClass = (acc, materia) => { // Arrow Function getBestClass (acc = Acumulator, materia)
    // Se a nota do Acumulador (elemento Comparado no Array), for maior do que a nota da matéria, é Retornada a nota
    if (acc.nota > materia.nota) return acc;
    // Depois é retornada a matéria de Maior nota, para dentro do array
    return materia;
    };
    
    const reportBetter = (students) => students.map((student) => ({ // Arrow Function reportBetter, que recebe students e cria um mapa
    // Depois retorna o elemento { name: 'nome', materia: 'Matéria de maior Nota'}
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name})); // A função reduce (getBestClass) é chamada, retorna a matéria de maior nota, e guarda materia.nome
    console.log(reportBetter(estudantes)); // É consolado a chamada da função getBestClass, chamando o obj estudantes