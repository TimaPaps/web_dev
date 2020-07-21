<?php
//подключаю head, doctype, header и фоновую картинку
    include($_SERVER['DOCUMENT_ROOT'] . '/inc/head-doctype.php');
    include($_SERVER['DOCUMENT_ROOT'] . '/inc/header.php');

//создаю ручной массив названий стран
$tripCountry = [
    '--Выбери своё путешествие--' => '/inc/picture.php', //не знаю почему hidden тоже попадает в trips, по этому hidden тоже буду учитывать
    'России' => '/inc/form-background-moscow.php',
    'Европе' => '/inc/form-background-big-ben.php',
    'Африке' => '/inc/form-background-pyramids.php',
    'Северной Америке' => '/inc/form-background-north-america.php',
    'Южной Америке' => '/inc/form-background-south-america.php',
    'Австралии' => '/inc/form-background-kangaroo.php'
];


//проверяю выбор направления путешествия
    if (!empty($_GET['trips'])) {

        $i = 0; //использую для вывода поздравления с выбором путешествия
        foreach ($tripCountry as $key => $valueTripCountry) { //перебираю ручной массив для получения ключей со значениями
            foreach ($_GET['trips'] as $valueTrips) //перебираю trips для получения значения

                if ($valueTrips == $key) { //если значение из trips = ключу из ручного массива
                    include($_SERVER['DOCUMENT_ROOT'] . $valueTripCountry); //то вставляю фоновую картинку
                    if ($i > 0) { //вывожу поздравление если выбрано путешествие, а не hidden
                        echo 'Поздравляем! Вы выбрали путешествие по ';
                        echo "$valueTrips <br>"; 
                    }                           
                }           
            $i++;
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