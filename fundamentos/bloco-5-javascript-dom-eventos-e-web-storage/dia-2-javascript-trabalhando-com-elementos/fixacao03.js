// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let filhosPaiDoPai = document.getElementById('pai');

for (let index = filhosPaiDoPai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = filhosPaiDoPai.childNodes[index];
    if (currentChildren.id !== 'pai') {
      currentChildren.remove();
    }
  }

  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
  segundoEUltimoFilhoDoFilho.remove();