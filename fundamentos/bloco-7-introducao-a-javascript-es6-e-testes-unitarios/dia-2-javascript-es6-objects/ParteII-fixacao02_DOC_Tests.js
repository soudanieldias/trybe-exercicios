var arr = ['a', 'b', 'c'];
console.log(`Chave: ${Object.keys(arr)} \nValor: ${Object.values(arr)}`);

// array com objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(`Chave: ${Object.keys(obj)} \nValor: ${Object.values(obj)}`); // console: ['0', '1', '2']

// array como objeto com ordenação aleatória por chave
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;
console.log(Object.keys(my_obj)); // console: ['foo']

Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.keys("foo");
// ["0", "1", "2"]                   (ES2015 code)
