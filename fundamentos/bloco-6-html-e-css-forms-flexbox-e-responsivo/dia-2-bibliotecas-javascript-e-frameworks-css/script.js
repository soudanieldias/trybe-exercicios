
function handlesubmit(event) {
    event.preventDefault();
}

let button = document.querySelector('.submit-button');
console.log(button);
button.addEventListener('click', handlesubmit);

function statesList () {
  let estados = document.getElementById('state');
  let optionsEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let textEstado = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiânia', 'Maranhão', 'Minas Gerais', 'Mato Grosso do Sul', 'Mato Grosso', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Paraná', 'Rio de Janeiro', 'Rio Grando do Norte', 'Rondônia', 'Roraima', 'Rio Grande do SUl', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
  // console.log(estados); // [DEBUG]
  for ( let index = 0; index < optionsEstado.length; index += 1 ) {
    let newState = document.createElement('option');
    estados.appendChild(newState).innerText = textEstado[index];
    estados.appendChild(newState).value = optionsEstado[index];
  }
}
statesList();