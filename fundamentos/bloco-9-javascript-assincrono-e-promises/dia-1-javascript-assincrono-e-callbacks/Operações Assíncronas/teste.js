function log1() {
  //
  console.log('1 - Receber roda');
  console.log('2 - Encaixar parafusos');
  console.log('3 - Fixar roda no carro');
}
// console.log(log1());

function log2() {
  //
  console.log('1 - Comprar parafusos');
  console.log('2 - Adicionar ao estoque');
  console.log('3 - Receber roda');
  console.log('4 - Encaixar parafusos');
  console.log('5 - Fixar roda no carro');
}
// console.log(log2());

function log3() {
  setTimeout(() => {
      console.log('Comprar parafusos') // Comprar parafusos
      console.log('Adicionar ao estoque') // Adicionar ao estoque
    }, 2000);
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
}
// console.log(log3());