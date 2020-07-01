//вызов и скрытие формы сообщения
$('.header-navigation-form-open, .main-form-open-btn, #picture-text-button').click(function(e){
    e.preventDefault();
    
    $(this).parents('.wrapper').find('.form-message').css('display', 'flex').hide().fadeIn(750);
});

$('.form-message-block-button').click(function(){
    $(this).parents('.form-message').fadeOut(750);
});
//конец вызова и скрытия формы сообщения

//анимация стрелки вверх и скрол страницы вверх
$('.up-arrow').animate({
    'right': '30px',
    'bottom': '95px'
}, 1000);

$('.up-arrow').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 750);
});
//конец анимации стрелки вверх и скрола страницы вверх

//скрол страницы вниз до до блока blocks при клике на Вопросы и ответы
$('#header-navigation-about-us').click(function(e){
    e.preventDefault();

    let offSet = $('.blocks').offset().top;
    let outHeight = $('.header').outerHeight();

    $('html, body').animate({
        scrollTop: offSet - outHeight
    }, 750);
});
//конец скрола страницы вниз до до блока blocks при клике на Вопросы и ответы

//вызов и скрытие поля ответа в faq
$('.faq-item-question').click(function(){
    $(this).parents('.faq-item').find('.faq-item-answer').slideToggle(400);
});
//конец вызова и скрытия поля ответа в faq

//скрол страницы вниз до до блока faq при клике на Вопросы и ответы
$('.header-navigation-question-answer').click(function(e){
    e.preventDefault();

    let offSet = $('.faq').offset().top;
    let outHeight = $('.header').outerHeight();

    $('html, body').animate({
        scrollTop: offSet - outHeight
    }, 750);
});
//конец скрола страницы вниз до до блока faq при клике на Вопросы и ответы

//анимация cookies
$('.cookies-btn, .cookies-btn-close').click(function(){
    $(this).parents('.cookies').animate({
        'bottom': '-185px'
    }, 750);
});
//конец анимации cookies

//кнопка выползающего меню
let countMenuButton = 0;
$('.menu-button').click(function() {

console.log(countMenuButton);

    if (countMenuButton == 0) {
        countMenuButton++;
        $('.header-navigation').animate({
            'left': 0,
        });
    } else {
        countMenuButton--;
        $('.header-navigation').animate({
            'left': -100 + "%",
        });
    }
   
});
//конец: кнопка выползающего меню