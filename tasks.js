//сумма чисел от 1 до 112 с интервалом 3
let sum1 = 0;
for(let i = 1; i <= 112; i = i + 3) {
    sum1 = sum1 + i;  
}
console.log(sum1);
console.log("");

//сумма введенных пользователем чисел
/*
let str1 = prompt("Введи первое число");
let str2 = prompt("Введи второе число");
let number1 = Number(str1);
let number2 = Number(str2);
//console.log(number1);
//console.log(number2);
let sum2 = 0;

if(number1 >= number2) {
    console.log("Сумма не существует!, первое число должно быть меньше второго");
} else {
    for(let i = number1; i <= number2; i++) {
        sum2 = sum2 + i;
    }
}
console.log(sum2);
*/

//тоже сумма введенных пользователем чисел, только короче
let number1 = Number(prompt("Введи первое число"));
let number2 = Number(prompt("Введи второе число"));
//console.log(number1);
//console.log(number2);
let sum2 = 0;

if(number1 >= number2) {
    console.log("Сумма не существует!, первое число должно быть меньше второго");
} else {
    for(number1; number1 <= number2; number1++) {
        sum2 = sum2 + number1;
    }
}
console.log(sum2);