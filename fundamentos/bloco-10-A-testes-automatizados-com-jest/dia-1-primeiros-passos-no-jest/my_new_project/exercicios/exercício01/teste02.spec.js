function division(x, y) {
//   console.log(x/y); // [DEBUG]
  return x / y;
}

describe('Testa function Division', () => {
  it('Teste 01', () => {
    expect(division(10, 2)).toBe(5);
  });

  it('Teste 02', () => {
    expect(division(10, 5)).toBe(2);
  });

  it('Teste 03', () => {
    expect(division(10, 1)).toBe(10);
  });

  it('Teste 04', () => {
    expect(division(1000, 10)).not.toBe(1000);
  });

});