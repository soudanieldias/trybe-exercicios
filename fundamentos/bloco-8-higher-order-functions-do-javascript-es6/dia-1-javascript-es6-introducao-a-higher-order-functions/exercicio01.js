//  Crie uma função que retorne um objeto no formato { nomeCompleto, email }
// representando uma nova pessoa contratada.
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa
// contratada em seu respectivo id.
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária
// e a partir dele gerar automaticamente um email no formato 'nome_da_pessoa@trybe.com'.

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const generateMail = (fullName) => { // Função generateMail recebe parâmetro fullName
    const email = fullName.toLowerCase().split(' ').join('_');
    // Salva esse parâmetro na variável email, identificando os espaçamentos ' ' e
    // os substituindo por '_'
    // Logo após isso, reatribui valor dos elementos newEmployees com o retorno dado por cada chamada de função
    return { fullName, email: `${email}@trybe.com` };
    // Como cada callBack possui um nome diferente, cada um em uma variavel, o retorno da função é sempre o fullName e seu email no modelo nome_sobrenome@trybe.com
    
  };

  console.log(newEmployees(generateMail));