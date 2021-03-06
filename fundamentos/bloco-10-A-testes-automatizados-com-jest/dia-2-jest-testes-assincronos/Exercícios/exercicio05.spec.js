/**
 * Para este exercício, tente adivinhar a saída dos console.log dos testes
 * abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.
 */

 beforeEach(() => console.log('1 - beforeEach'));
 afterEach(() => console.log('1 - afterEach'));
 
 test('', () => console.log('1 - test'));
 
 describe('Scoped / Nested block', () => {
   beforeEach(() => console.log('2 - beforeEach'));
   afterEach(() => console.log('2 - afterEach'));
 
   test('', () => console.log('2 - test'));
 });

// Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.

/**
 * RETORNO TEST DA LINHA 9
 * '1 - beforeEach'
 * '1 - test'
 * '1 - afterEach'

 * RETORNO TEST DA LINHA 1

 * '1 - beforeEach' (CORREÇÃO) *****
 * '2 - beforeEach'
 * '2 - test'
 * '2 - afterEach'
 * '1 - afterEach' (CORREÇÃO) *****
 * 
 * OBS: Funções beforeEach e afterEach, declaradas no escopo global, ou seja, fora de um describe,
 * serão executadas em todos os escopos locais (testes contidos dentro de cada describe
*/