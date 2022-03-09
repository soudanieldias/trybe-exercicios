const express = require('express');

const app = express(); // 1

// paths #GET (START)
app.get('/', handleIndexPage);
app.get('/hello', handleHelloWorldRequest); // 2
app.get('/teste', handleTestRequest); // 2
// paths (END)

app.listen(8080, () => {
  console.log('Aplicação ouvindo na porta 8080');
}); // 3

// responses func (START)
function handleIndexPage(req, res) {
  res.status(200).send(`
  <html>
    <header>
        <title>Aplicação Rodando com Sucesso</title>
    </header>
    <hoby>
        <h1>Corpo Do Site!</h1>
    </body>
  </html>
  `);
}

function handleTestRequest(req, res) {
    res.status(404).send('ERRO!!!');
}

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}
// responses func (END)