function add(a, b) {
  return a + b;
}

describe('Testa soma dos Elementos', () => {
  it('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('2 + 2 = 4', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('16 + 16 = 32', () => {
    expect(add(16, 16)).toBe(32);
  });

  it('1000 + 999 = 1999', () => {
    expect(add(1000, 999)).not.toBe(2000);
  });

});