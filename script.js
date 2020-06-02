$('.form-open').click(function(e){
    e.preventDefault();
    $('.form-message').css('display', 'flex').hide().fadeIn(2000);
});

$('.form-message-block-botton').click(function(){
    $('.form-message').fadeOut(2000);
});

$('.main-form-open-btn').click(function(){
    $('.form-message').css('display', 'flex').hide().fadeIn(2000);
});