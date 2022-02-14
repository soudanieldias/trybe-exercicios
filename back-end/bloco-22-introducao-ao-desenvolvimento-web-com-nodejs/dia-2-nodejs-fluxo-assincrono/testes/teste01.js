const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log('Arquivo lido com sucesso.');
  console.log('\nConteúdo:\n');
  console.log(`${content.toString('utf8')}\n`);
});