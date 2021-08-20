
function handlesubmit(event) {
    event.preventDefault();
}

let button = document.querySelector('.submit-button');
console.log(button);
button.addEventListener('click', handlesubmit);

let estados = document.getElementById('state');
let optionsEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
console.log(estados);

for ( let index = 0; index < optionsEstado.length; index += 1 ) {
    let newState = document.createElement('option');
    estados.appendChild(newState).innerText = optionsEstado[index];
    estados.appendChild(newState).value = optionsEstado[index];
}