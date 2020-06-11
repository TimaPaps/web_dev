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