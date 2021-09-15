const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

const novoUsuario = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(novoUsuario(30, 'Daniel', 'daniel@email.com')); // { id: 30, name: 'Daniel', email: 'daniel@email.com' }