const sum = require('../src/sum.js');

test('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  });