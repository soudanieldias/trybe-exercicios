const connection = require('./connection');

const getAllUsers = async () => {
  try {
    const [users] = await connection.execute('SELECT * FROM model_example.users;');
    return users;
  } catch (error) {
    return console.error(error);
  }
};

const addUser = async ({ firstName, lastName, email, password }) => {
  try {
    const [user] = await connection.execute(
      'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);',
      [firstName, lastName, email, password]
    );
    return user;
  } catch (error) {
    return console.error(error);
  }
};

const removeUser = async ({ id }) => {
  try {
    const [user] = await connection.execute(
      'DELETE FROM model_example.users WHERE id = ?;',
      [id]
    );
    return user;
  } catch (error) {
    return console.error(error);
  }
};

const updateUser = async ({ id, firstName, lastName, email, password }) => {
  try {
    const [user] = await connection.execute(
      'UPDATE model_example.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;',
      [firstName, lastName, email, password, id]
    );

    if (user.affectedRows === 0) {
      return `Usuário ID '${id}' não encontrado!`;
    }

    return user;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  removeUser,
  updateUser,
};