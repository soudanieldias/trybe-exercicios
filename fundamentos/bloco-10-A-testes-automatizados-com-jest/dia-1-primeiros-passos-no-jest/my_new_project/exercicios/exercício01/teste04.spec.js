function division(x, y) {
    if (y === 0) return ('parameter y must not be 0');
    return x / y;
  }

describe('Testa Divisões', () => {

  test('Divisão de 10 / 2 = 5', () => {
    expect(division(10, 2)).toBe(5);
  });

  test('Divisão de 10 / 5 = 2', () => {
    expect(division(10, 5)).toBe(2);
  });

  test('Divisão de 10 por 0 Retorna um ERRO!', () => {
    expect(division(10, 0)).toBe('parameter y must not be 0');
  });

});