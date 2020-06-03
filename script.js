$('.form-open').click(function(e){
    e.preventDefault();
    console.log('click');
    $(this).parents('.wrapper').find('.form-message').css('display', 'flex').hide().fadeIn(2000);
});

$('.form-message-block-button').click(function(){
    $(this).parents('.form-message').fadeOut(2000);
});

$('.main-form-open-btn, #picture-text-button').click(function(){
    $(this).parents('.wrapper').find('.form-message').css('display', 'flex').hide().fadeIn(2000);
});