const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

  // As propriedades do objeto student não são nada descritivas, não é mesmo?
  // Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair
  // as propriedades de students teriam nomes sem significado...
  // pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:
  
  const { a: name, b: classAssigned, c: subject } = student;

  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática