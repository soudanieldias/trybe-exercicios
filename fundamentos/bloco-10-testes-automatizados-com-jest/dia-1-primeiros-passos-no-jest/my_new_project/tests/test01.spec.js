const arr = [1, 2 ,3];
const obj = { a: 1, b: 2, c: 3};
let counter = 0;

test('TESTE: Array toBe Array', () => {
    
    expect(arr).toBe([1, 2, 3]); // fails
    counter += 1;
});

test('TESTE: Object toBe Object', () => {

    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    counter += 1;
});

test('TESTE: Array toEqual Array', () => {
    expect(arr).toEqual([1, 2, 3]); // OK
    counter += 1;
});

test('TESTE: Object toEqual Object', () => {
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
    counter += 1;
});

test('array and object equality', () => {
    expect(counter).toEqual(2);
});