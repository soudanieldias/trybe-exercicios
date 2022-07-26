// const assert = require('assert'); // Sintaxe para incluir o módulo assert

describe('Verifica igualdade entre elementos', () => {
    it('Teste 01', () => {
        expect(50).toBe(50); // Pass
    });
    it('Teste 02', () => {
        expect(50).not.toBe(70); // Pass
    });
});

// assert.strictEqual(50, 70); // AssertionError: 50 === 70