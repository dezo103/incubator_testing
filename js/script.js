let inputText = document.querySelector('input');
let button = document.querySelector('.button');
button.addEventListener('click', showText);

function showText() {
    alert(inputText.value);
}

