function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

let number = getRandomIntInclusive(1, 100);
console.log(number);

for (let i = 1; i <= 5; i++) {
    let userNumber = Number(prompt(`Введи число от 1 до 100 включительно. Осталось попыток ${6 - i}`));
    console.log(userNumber);

    

    if (i < 5) {
        if (userNumber < number) {
            alert("Введенное число меньше загаданного");
        } else if (userNumber > number) { 
            alert("Введенное число больше загаданного");
        }
    }
    
    if (userNumber == number ) {
        alert(`Ты победил. Использовано ${i} из 5 попыток`);
        break;
    } 

    if (i === 5) {
        alert(`Ты проиграл. Загаданное число ${number}`)
    }
}