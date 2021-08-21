let inputText = document.querySelector('input');
let button = document.querySelector('.button');
button.addEventListener('click', showText);

function showText() {
    if (inputText.value === 'google') {
        alert('Yandex круче. Но это не точно');
    }
    else {
        alert(inputText.value);
    }
}

