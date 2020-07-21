// игрок1 вводит слово
let wordGame = prompt("Чтобы открылся сайт - Введи слово:");
console.log(wordGame);
// узнаем длину слова
let wordGameLength = wordGame.length;
// создаем переменную для ограничения вводимых попыток
let attempt = wordGameLength + 3;
// парсим введенное слово по буквам и заносим в массив
wordGame = wordGame.split('');

// создаем пустой массив для ввода букв игроком2
let userWord = [];
// в этот массив в цикле помещаем "_", массив равен длине введенного слова
for (let i = 0; i < wordGameLength; i++) {
    userWord.push('_');
}

// игрок2 вводит первую букву
let letter = prompt("Угадай букву:");

// создаем массив введенных букв
let letterMassiv = [];
letterMassiv.push(letter);
console.log(letterMassiv);

/*перебираем массив из элементов введенного слова
и в цикле сравниваем поочередно элементы с введенной игроком2 буквой,
если есть совпадение то по индексу элемента введенного слова вставляем в массив
для вводимых букв и перезаписываем "_" введенной буквой по индексу из 
массива для введенного слова*/
wordGame.forEach(function(value, index) {
    if (value == letter) {
        userWord[index] = letter;
    }
});
console.log(userWord);
/* создаем переменную счетчик для сравнения с переменной attempt
либо можно использовать длину массива letterMassiv*/
let count1 = letterMassiv.length;
console.log(count1);

// в цикле сравниваем преобразованные массивы в строки
while (userWord.join('') != wordGame.join('')) {

//создаем булевую переменную для проверки на повторный ввод букв
    let exist = false;
//если условие верно просим ввести следующую букву и показываем, если есть совпадения, введенные буквы
    letter = prompt(`
    Угаданные буквы: ${userWord.join('')}.
    Осталось попыток: ${attempt - count1}.
    Угадай следующую букву:
    `);

// проверяем буквы на повторный ввод    
    letterMassiv.forEach(function(value) {
    if (value == letter) {
            exist = true;
        }
    });
    if (exist) {
            alert(`Такая буква уже была!`);
            //letterMassiv.splice(index, 1, value);
        } else {
            letterMassiv.push(letter);
            count1++; 
    }

// не рабочая версия через цикл проверки буквы на повторный ввод
    /*letterMassiv.forEach(function(value, index){
        if (exist) {
            alert(`Такая буква уже была!`);
            //letterMassiv.splice(index, 1, value);
        } else {
            letterMassiv.push(letter);
            count1++;   
        }
    });*/

// увеличиваем счетчик после каждого ввода буквы
     
    console.log(letterMassiv);
    console.log(count1);
    console.log(attempt);       

// сравниваем счетчик и переменную attempt
    if (count1 <= attempt) {
/*перебираем массив из элементов введенного слова
и в цикле сравниваем поочередно элементы с введенной игроком2 буквой,
если есть совпадение то по индексу элемента введенного слова вставляем в массив
для вводимых букв и перезаписываем "_" введенной буквой по индексу из 
массива для введенного слова*/
        wordGame.forEach(function(value, index) {
            if (value == letter) {
                userWord[index] = letter;
            }
            console.log(userWord);
        });
    } else {
        alert(`Ты проиграл!  загаданное слово - ${wordGame.join('')}`);
        break;
    }
    if (userWord.join('') == wordGame.join('')) {
        alert(`Ты победил!!! количество попыток - ${count1}, загаданное слово - ${wordGame.join('')}`);   
    }
}