let inputText = document.querySelector('input');
let button = document.querySelector('.button');
button.addEventListener('click', function(){
    setTimeout(showText, 3000);
});

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

let arrayOfNumbers = [2, 56, 78, 4, 34, 2, 78, 78, 90];
let min = arrayOfNumbers[0];
let max = min;

for (let i = 0; i<arrayOfNumbers.length; i++) {
   if (arrayOfNumbers[i] > max) {
       max = arrayOfNumbers[i];
   }
   if (arrayOfNumbers[i] < min) {
       min = arrayOfNumbers[i];
   }
}

let a = 56;
let b = 78;

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


function findMax(arr) {
    let maxNumber = arr[0];
    arr.forEach(function(e) {
        if (e > maxNumber) maxNumber = e;
    });
    return maxNumber;
}




