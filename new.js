//проверка возраста
/*
let counter = 0;

if (counter < 1) {
    counter = "меньше 1 года";
} else if (counter == 1) {
    counter = `${counter} год`;
} else if (counter <= 4) {
    counter = `${counter} года`;
} else if (counter <=10) {
    counter = `${counter} лет`;
} else {
    counter = "больше 10 лет"
}
console.log(`Мне ${counter}`);
*/

//проверка возраста
let age = prompt("Укажи сколько тебе лет: ");
let twoLastNumber = age % 100;
let lastNumber = age % 10;
let word;

if (twoLastNumber == 11 || twoLastNumber == 12 || 
    twoLastNumber == 13 || twoLastNumber == 14) {
    word = "лет";
} else if (lastNumber == 1) {
    word = "год";
} else if (lastNumber >= 2 && lastNumber <=4) {
    word = "года";
} else {
    word = "лет"
}

console.log(`Мне ${age} ${word}`);
console.log("");
