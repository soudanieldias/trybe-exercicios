const assert = require('assert');

function division(x, y) {
//   console.log(x/y); // [DEBUG]
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');