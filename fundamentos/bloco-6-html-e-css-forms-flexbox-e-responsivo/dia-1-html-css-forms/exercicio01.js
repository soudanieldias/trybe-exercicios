
function handlesubmit(event) {
    event.preventDefault();
}

let button = document.querySelector('.submit-button');
console.log(button);
button.addEventListener('click', handlesubmit);