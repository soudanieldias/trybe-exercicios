const express = require('express');
const { getAllUsers, addUser, removeUser, updateUser } = require('./models/user');
const { verifyEmail } = require('./middlewares/index');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/user', async (req, res) => {
  const allUsers = await getAllUsers();
  // console.log(allUsers)
  return res.status(200).json(allUsers);
});

app.post('/user', verifyEmail, (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = addUser({ firstName, lastName, email, password });
  // console.log(req.body);
  return res.status(200).json('Usuário adicionado com Sucesso!');
});

app.post('/user/:id', (req, res) => {
    const { id } = req.params;
    removeUser({ id });
    return res.status(200).json('Removendo usuário!');
});

app.put('/user', async (req, res) => {
  const { id, firstName, lastName, email, password } = req.body;
  const user = await updateUser({ id, firstName, lastName, email, password });
  return res.status(200).json(user);
});

app.listen(PORT, () => {
  console.log(`The audience is... OOPS!\nThe service is Listening on PORT: ${PORT}`);
});
