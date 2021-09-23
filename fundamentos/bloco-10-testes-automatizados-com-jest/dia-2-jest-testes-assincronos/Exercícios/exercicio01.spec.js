/** 
 * Escreva um teste que verifique a chamada do callback de uma função uppercase,
 * que transforma as letras de uma palavra em letras maiúsculas.
 * Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
 */

  const uppercase = (str, callback) => {
    if (!str || !callback) return "String VAZIA!!!";
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  describe('Testa Função upperCase', () => {
    test('Verifica se passado uma palavra para a função, todas as letras retornam MAIÚSCULAS', done => {

      function callback(data) {
        
        try {
          expect(data).toBe('STRING');
          done();

        } catch (error) {
          done(error);
        }
      }
      uppercase('string', callback);
    });
    test('Verifica se, nenhum parâmetro foi passado, retorna um ERRO.', () => {
      // const retornoDaFuncao = 
      expect(uppercase()).toBe("String VAZIA!!!");
    })
  });