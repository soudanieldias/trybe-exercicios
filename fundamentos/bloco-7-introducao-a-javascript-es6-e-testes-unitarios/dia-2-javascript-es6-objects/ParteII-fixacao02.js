const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  //console.log(`${Object.keys(student1)} ${Object.values(student1)}`); //Imprime Valores Soltos

  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
    //   console.log("1º LOG:");
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    //   console.log("**********");
    }
  };
  console.log('Estudante 1:');
  listSkills(student1);
  console.log("**********");

  console.log('Estudante 2:');
  listSkills(student2);
  console.log("**********");

  console.log("LOG CHAVE <=> VALUE ESTUDANTE 01:");
  for (values in student1) {
    
    console.log(`${values}: ${student1[values]}`);
  }
  
  console.log("LOG CHAVE <=> VALUE ESTUDANTE 02:");
  for (values in student2) {
    
    console.log(`${values}: ${student2[values]}`);
  }