/**
 * O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios,
 * e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos',
 * faça um teste que verifique que os repositórios
 * 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator'
 * se encontram nessa lista.
 */

 const fetch = require('node-fetch');

 const getRepos = (url) => {
   return fetch(url)
     .then(response => response.json())
     .then((data) => {
       return data.map((repo) => repo.name);
     });
 };

//  console.log(getRepos('https://api.github.com/orgs/tryber/repos'));

describe('Realiza Suite de testes no código', () => {

  test('Teste01', () => {

    const trybeURL = 'https://api.github.com/orgs/tryber/repos';

    expect.assertions(1);

    return getRepos(trybeURL).then(data => expect(data).toBe(["sd-01-week3-html-css-project", "sd-01-week4-5-project-meme-generator", "sd-01-week4-5-project-mystery-letter", "sd-01-week4-5-project-pixels-art", "sd-01-week4-5-project-talk-pirate", "sd-01-week4-5-project-color-guess", "sd-01-week4-5-project-todo-list", "sd-01-week6-project-facebook-signup", "sd-01-week7-project-daily-prophet", "sd-02-week2-project-shell-script", "sd-01-week8-project-zoo-functions", "sd-01-week9-project-shopping-cart", "sd-01-week10-movie-card-library", "sd-01-week11-movie-card-library-stateful", "sd-02-week5-project-meme-generator", "sd-02-week5-project-pixels-art", "sd-02-week5-project-color-guess", "sd-02-week5-project-todo-list", "sd-02-week5-project-mystery-letter", "sd-02-week6-project-facebook-signup", "sd-02-week7-project-daily-prophet", "sd-02-week8-project-zoo-functions", "sd-02-week9-project-shopping-cart", "sd-02-week11-movie-card-library", "sd-02-week12-movie-card-library-stateful", "sd-01-week12-movie-card-library-crud", "sd-01-week13-project-frontend-online-store", "sd-01-week13-project-frontend-online-store-group-2", "linter-template", "sd-01-week14-js-unit-tests"]));
  });
});
 