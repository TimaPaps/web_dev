//проверка полей на содержимое перед отправкой сообщения
$('#questionForm').submit(function(e) {
    $('.error').remove();

    let fieldName = $('[name="fullName"]');
    let fieldEmail = $('[name="email"]');
    let fieldPhone = $('[name="phone"]');
    let fieldTextMessage = $('[name="textMessage"]');
    let fieldNameLen = fieldName.attr('data-length');
    let fieldEmailLen = fieldEmail.attr('data-length');
    let fieldPhoneLen = fieldPhone.attr('data-length');
    let fieldTextMessageLen = fieldTextMessage.attr('data-length');
    let fieldNameValue = fieldName.val();
    let fieldEmailValue = fieldEmail.val();
    let fieldPhoneValue = fieldPhone.val();
    let fieldTextMessageValue = fieldTextMessage.val();

    if (fieldNameValue === "" || fieldNameValue.length >= fieldNameLen) {

        if (fieldNameValue === "") {
            fieldName.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldNameValue.length >= fieldNameLen) {
            fieldName.before('<div class="error">Слишком длинное ФИО!</div>');
        }        
        e.preventDefault();
    }

    if (fieldEmailValue === "" || fieldEmailValue.length >= fieldEmailLen) {

        if (fieldEmailValue === "") {
            fieldEmail.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldEmailValue.length >= fieldEmailLen) {
            fieldEmail.before('<div class="error">Слишком длинный Email!</div>');
        }
        
        e.preventDefault();
    }

    if (fieldPhoneValue === "" || fieldPhoneValue.length >= fieldPhoneLen) {

        if (fieldPhoneValue === "") {
            fieldPhone.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldPhoneValue.length >= fieldPhoneLen) {
            fieldPhone.before('<div class="error">Слишком длинный номер!</div>');
        }        
        e.preventDefault();
    }    

    if (fieldTextMessageValue === "" || fieldTextMessageValue.length >= fieldTextMessageLen) {

        if (fieldTextMessageValue === "") {
            fieldTextMessage.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldTextMessageValue.length >= fieldTextMessageLen) {
            fieldTextMessage.before('<div class="error">Слишком длинное сообщение!</div>');
        }        
        e.preventDefault();
    }
});

//один keyup для всех полей
$('input, textarea').keyup(function(e) {
    let field = $(this);
    let len = field.attr('data-length');
    let fieldValue = field.val();

    field.prev('.error').remove();

    if(fieldValue === "" || fieldValue.length >= len) {
        if(fieldValue === "") {
            let fieldName = field.attr('placeholder');
            field.before(`<div class="error">Заполни поле - ${fieldName}!</div>`);
        }
        if(fieldValue.length >= len) {
            field.before('<div class="error">Слишком много символов!</div>');
        }

        e.preventDefault();
    }
});

//закрытие окна сообщения нажатием клавишы Esc
$(window).keyup(function(e) {
    
    //console.log(e.keyCode);
    if (e.keyCode === 27) {
        $('.form-message').fadeOut();
    }
});


//keyup - событие нажатия на клавишу, keyup для каждого поля
/*
$('[name="fullName"]').keyup(function(e) { 

    let fieldName = $('[name="fullName"]');
    let fieldNameValue = fieldName.val();

    fieldName.prev('.error').remove();

    if (fieldNameValue === "" || fieldNameValue.length >= 20) {

        if (fieldNameValue === "") {
            fieldName.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldNameValue.length >= 20) {
            fieldName.before('<div class="error">Слишком длинное ФИО!</div>');
        }        
        e.preventDefault();
    }
});

$('[name="email"]').keyup(function(e) {

    let fieldEmail = $('[name="email"]');
    let fieldEmailValue = fieldEmail.val();

    fieldEmail.prev('.error').remove();

    if (fieldEmailValue === "" || fieldEmailValue.length >= 20) {

        if (fieldEmailValue === "") {
            fieldEmail.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldEmailValue.length >= 20) {
            fieldEmail.before('<div class="error">Слишком длинный Email!</div>');
        }        
        e.preventDefault();
    }
});

$('[name="phone"]').keyup(function(e) {

    let fieldPhone = $('[name="phone"]');
    let fieldPhoneValue = fieldPhone.val();

    fieldPhone.prev('.error').remove();

    if (fieldPhoneValue === "" || fieldPhoneValue.length >= 15) {

        if (fieldPhoneValue === "") {
            fieldPhone.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldPhoneValue.length >= 15) {
            fieldPhone.before('<div class="error">Слишком длинный номер!</div>');
        }        
        e.preventDefault();
    }
});

$('[name="textMessage"]').keyup(function(e) {

    let fieldTextMessage = $('[name="textMessage"]');
    let fieldTextMessageValue = fieldTextMessage.val();

    fieldTextMessage.prev('.error').remove();

    if (fieldTextMessageValue === "" || fieldTextMessageValue.length >= 100) {

        if (fieldTextMessageValue === "") {
            fieldTextMessage.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldTextMessageValue.length >= 100) {
            fieldTextMessage.before('<div class="error">Слишком длинное сообщение!</div>');
        }        
        e.preventDefault();
    }
});
*/