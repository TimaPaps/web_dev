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