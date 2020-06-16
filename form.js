$('#questionForm').submit(function(e) {
    $('.error').remove();

    let fieldName = $('[name="fullName"]');
    let fieldEmail = $('[name="email"]');
    let fieldPhone = $('[name="phone"]');
    let fieldTextMessage = $('[name="textMessage"]');
    let fieldNameValue = fieldName.val();
    let fieldEmailValue = fieldEmail.val();
    let fieldPhoneValue = fieldPhone.val();
    let fieldTextMessageValue = fieldTextMessage.val();


    if (fieldNameValue === "" || fieldNameValue.length >= 20) {

        if (fieldNameValue === "") {
            fieldName.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldNameValue.length >= 20) {
            fieldName.before('<div class="error">Слишком длинное ФИО!</div>');
        }        
        e.preventDefault();
    }

    if (fieldEmailValue === "" || fieldEmailValue.length >= 20) {

        if (fieldEmailValue === "") fieldEmail.before('<div class="error">Заполни поле!</div>');
        if (fieldEmailValue.length >= 20) fieldEmail.before('<div class="error">Слишком длинный Email!</div>');
        
        e.preventDefault();
    }

    if (fieldPhoneValue === "" || fieldPhoneValue.length >= 15) {

        if (fieldPhoneValue === "") {
            fieldPhone.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldPhoneValue.length >= 15) {
            fieldPhone.before('<div class="error">Слишком длинный номер!</div>');
        }        
        e.preventDefault();
    }    

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

//keyup - событие нажатия на клавишу
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

//закрытие окна сообщения нажатием клавишы Esc
$(window).keyup(function(e) {
    
    //console.log(e.keyCode);
    if (e.keyCode === 27) {
        $('.form-message').fadeOut();
    }
});

//один keyup для всех полей - НЕ РАБОТАЕТ !!!!!!
/*
$('[name="fullName"], [name="email"], [name="phone"], [name="textMessage"]').keyup(function(e) {
    
    let fieldName = $('[name="fullName"]');
    let fieldEmail = $('[name="email"]');
    let fieldPhone = $('[name="phone"]');
    let fieldTextMessage = $('[name="textMessage"]');
    let fieldNameValue = fieldName.val();
    let fieldEmailValue = fieldEmail.val();
    let fieldPhoneValue = fieldPhone.val();
    let fieldTextMessageValue = fieldTextMessage.val();

    $(this).parents('.form-item').find('fieldName, fieldEmail, fieldPhone, fieldTextMessage').prev('.error').remove();

    if (fieldNameValue === "" || fieldNameValue.length >= 20 || 
        fieldEmailValue === "" || fieldEmailValue.length >= 20 || 
        fieldPhoneValue === "" || fieldPhoneValue.length >= 15 || 
        fieldTextMessageValue === "" || fieldTextMessageValue.length >= 100) {

        if (fieldNameValue === "") {
            fieldName.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldNameValue.length >= 20) {
            fieldName.before('<div class="error">Слишком длинное ФИО!</div>');
        } 
        if (fieldEmailValue === "") {
            fieldEmail.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldEmailValue.length >= 20) {
            fieldEmail.before('<div class="error">Слишком длинный Email!</div>');
        }  
        if (fieldPhoneValue === "") {
            fieldPhone.before('<div class="error">Заполни поле!</div>');
        }
        if (fieldPhoneValue.length >= 15) {
            fieldPhone.before('<div class="error">Слишком длинный номер!</div>');
        }   
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