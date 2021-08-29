let siteButton = document.getElementById('site-button');
console.log(siteButton);

function clickCounter() {
    const elementoP = document.querySelector('p');
    let contador = 0;
    console.log(elementoP);
    siteButton.addEventListener('click', function() {
        contador+= 1;
        // console.log(contador); // [DEBUG]
        elementoP.innerText = contador;
    });

}
clickCounter();