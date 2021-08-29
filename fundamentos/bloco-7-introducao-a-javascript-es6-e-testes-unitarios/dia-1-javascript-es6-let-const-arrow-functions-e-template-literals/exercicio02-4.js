const alteraLetra = (texto, substitui) => {
    let arrayPalavras = texto.split(' ');
    let salvaTexto = [];
    for (let index = 0; index < arrayPalavras.length; index += 1) {
        if (arrayPalavras[index] === 'x') {
            arrayPalavras[index] = substitui;
          }
    }
    // console.log(arrayPalavras); // [DEBUG]
    
    // return arrayPalavras.toString();
    return arrayPalavras.join(' ');
}

console.log(alteraLetra("Este texto foi modificado pelo x", "Daniel Dias"));