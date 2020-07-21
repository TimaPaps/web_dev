<?php
//подключаю head, doctype, header и фоновую картинку
    include($_SERVER['DOCUMENT_ROOT'] . '/inc/head-doctype.php');
    include($_SERVER['DOCUMENT_ROOT'] . '/inc/header.php');

//проверяю выбор направления путешествия
    if (!empty($_GET['trips'])) {
        foreach ($_GET['trips'] as $valueTrips) {//перебираю trips для получения значения
            echo "
                <div class='$valueTrips form-background-item'>
                    <div class='window-answer'></div>
                </div>
            ";
            echo 'Поздравляем! Вы выбрали путешествие по ';
            echo "$valueTrips <br>";
        } 

        if (!empty($_GET['fullName']) && !empty($_GET['email']) && !empty($_GET['phone'])) { //проверка заполненности полей ФИО email Телефон
            if (mb_strlen($_GET['email']) < 50 && strlen($_GET['phone']) < 12) { //ставлю ограничение на длину ввода в поля email и Телефон
                                                                                //поле сообщения и WhatsApp не трогаю
        //вывод в цикле contact с проверкой на пустоту
                echo "
                    Уважаемый(ая), {$_GET['fullName']} <br>                
                "; 
        //сама проверка
                if (isset($_GET['contact'])) {
        
                    echo 'Мы свяжемся с Вами выбранным способом:<br>';
                    foreach ($_GET['contact'] as $value) {
                        echo "- $value<br>";
                    }
                } else {
                    echo 'Вы не выбрали как с Вами связаться';
                }    
            } else {
                echo 'Слишком длинный email (>50 символов) или телефон (>12 цифр)';
            }
        } else {
            echo 'Поля ФИО, Email и Телефон обязательны для заполнения.';
        }
    }

//подключаю footer
    include($_SERVER['DOCUMENT_ROOT'] . '/inc/footer.php');
?>