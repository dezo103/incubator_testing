let inputText = document.querySelector('input');
let button = document.querySelector('.button');
button.addEventListener('click', showText);

const arrayOfObject = [
    {
        name: 'Alex',
        age: 45
    },
    {
        name: 'Koss',
        age: 25},
    {
        name: 'Fill',
        age: 15}
];

function showText() {
    if (inputText.value === 'google') {
        alert(`Yandex круче. Но это не точно. ${arrayOfObject[0].name}`);

    }
    else {
        alert(inputText.value + '. ' +arrayOfObject[0].name);
    }
}

function superSum(a, b) {
    alert (a + b);
}



