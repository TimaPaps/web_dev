// простейший слайдер
/*
let slides = $('.slider-line-item');
let counter = 0;

$('.slider-line').click(function() {

    slides.eq(counter).css('display', 'none');
    //slides.eq(counter += 1).css('display', 'flex');  --- мой вариант

    /*counter = counter + 1;                          --- вариант Алексея
    counter += 1;
    counter ++;
    ++counter;

    if (counter == slides.length - 1) {
        slides.eq(0).css('display', 'flex');
        counter = 0;
    } else {
        slides.eq(++counter).css('display', 'flex');      // вариант Алексея
    }   
});
*/

//зациклинный горизонтальный слайдер
/*
$('.slider-right-button').click(function() {

    $('.slider-line').css('left', '-100%'); //если % (-100%) то в кавычках
});
*/
/*
let counter = 0;
$('.slider-right-button').click(function() {

    if (counter != 6) {              // зависимость от количества слайдов
        counter++;                   // зависимость от количества слайдов
    } else {                         // зависимость от количества слайдов
        counter = 0;                 // зависимость от количества слайдов
    }
    
    $('.slider-line').css({
        'left': (-100 * counter) + '%'    //если просто цифра (-100) то без кавычек
    });
});    
*/       

let slides = $('.slider-line-item');
let slidesAll = $('.slider-line-item').length;
let counter = 0;
let firstSlider = $('.slider-line-item').eq(0).clone(); //клонирование элемента
$('.slider-line').append(firstSlider);                  //вставка клона элемента в конец
/*let lastSlider = $('.slider-line-item').eq(slides.length).clone();
$('.slider-line').prepend(lastSlider);*/

$('.slider-right-button').click(function() {

    if (counter != slides.length - 1) {             
        counter++;   
        console.log(counter);

        $('.slider-line').animate({
            'left': (-100 * counter) + '%'
        }, 500);
    }else { 
        counter++;

        $('.slider-line').animate({
            'left': (-100 * counter) + '%'  
        }, 500, function() {
            $('.slider-line').css('left', 0);
        });
        
        counter = 0;               
    }   
}); 

//неудавшаяся самостоятельная попытка мотать слайдер влево с прыжком в конец

$('.slider-left-button').click(function() {

    if (counter != 0) {             
        counter--;
        console.log(counter);

        $('.slider-line').animate({
            'left': (-100 * counter) + '%'  
        }, 500);
  
    } else { 
        counter = slides.length;
        $('.slider-line').animate({
            'left': (-100 * counter) + '%'            
        }, 0, function() {
            $('.slider-line').animate({
                'left': (-100 * (counter -= 1)) + '%'
        }, 500); 
      });
    }
});

//мотаем слайдер влево с прыжком в конец по версии Алексея
/*
$('.slider-left-button').click(function() {
    if (counter == 0) {
        counter = slidesAll;
        $('.slider-line').animate({
            'left': (-100 * counter) + '%'  
        }, 0, function() {
            $('.slider-line').animate({
                'left': (-100 * --counter) + '%'    
            }, 500);
        });
    } else {
        counter--;
        //console.log(counter);
    
        $('.slider-line').animate({
            'left': (-100 * counter) + '%'  
        }, 500);
    }   
});
*/