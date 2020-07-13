<?php
    $title = 'Главная страница сайта';
?>

<?php
    include('inc/head-doctype.php');
?>
<body id="body">
    <div class="wrapper">
        <?php
            include('inc/header.php');
        ?>
        <main>
            <div class="picture">
                <div class="picture-social-icons">
                    <img src="/images/social-icons/email.png" alt="email">
                    <img src="/images/social-icons/telegram.png" alt="telegram">
                    <img src="/images/social-icons/whatsapp.png" alt="whatsapp">
                </div>  
                <div class="picture-rocket">
                    <div class="picture-fire"></div>
                </div>
                <div class="picture-text">
                    <p>
                        Только красивые путешествия!
                    </p>
                    <p id="picture-text-button">
                        присоединяйся!
                    </p>
                </div>  
                <div class="picture-scroll-down"></div>    
            </div>
            <section>
                <h1>Путешевствуй красиво! Блог в фотографиях</h1>
                <div class="content">
                    <p>Представьте себе все лучшее, что есть в России: широкие просторы, разнообразная природа, щедрая душа, девушки особой красоты, баня в конце концов. Добавьте к этому все то, чем так привлекательна Москва: гастрономические рестораны, безудержные вечеринки, звезды ТВ и инстаграмма вокруг. Взболтайте, но не смешивайте и получите Розу Хутор 2017 – правильный баланс здорового лайфстайла и роскоши.</p>
                    <p>Красная поляна также радует своей доступностью: перелет занимает 2,5 часа, иметь визу необходимости нет, заказать такси можно через привычное приложение за 1400 руб., а время в пути от аэропорта до отеля составляет менее часа! Ну, где еще такое есть? При этом местная инфраструктура не просто ничуть не уступает Альпам, но и даже предвосхищает ожидания: здесь вкуснее, уютнее и веселее. Я уже не говорю об удивительном контрасте температур – наверху зима, а внизу лето!</p>
                    <p>Более того, несмотря на весну за окном, успеть все это оценить лично совсем не поздно – рекордное количество снега обещает продлить сезон на весь апрель, а курорт тем временем предлагает на этот период очень привлекательные цены!</p>
                    <p>В общем, какое бы время вы ни выбрали, Роза Хутор удивит и подарит желание говорить о России с восторгом!</p>
                </div>
                <div class="blocks">                    
                    <section class="blocks-item">
                        <img src="/images/moscow.png" alt="Москва">
                        <h3 class="h3-style">ПУТЕШЕСТВИЯ ПО РОССИИ</h3>
                        <p>
                            Самые интересные уголки России <br>
                            Самые необычные маршруты!
                        </p>                
                    </section>            
                    <section class="blocks-item">
                        <img src="/images/big-ben.png" alt="Биг-Бен">
                        <h3 class="h3-style">ПУТЕШЕСТВИЯ ПО ЕВРОПЕ</h3>
                        <p>
                            Разные страны, разные культуры, исторические места и все самое интересное в современной Европе!
                        </p> 
                    </section>
                    <section class="blocks-item">
                        <img src="/images/pyramids.png" alt="Пирамиды">
                        <h3 class="h3-style">ПУТЕШЕСТВИЯ ПО АФРИКЕ</h3>
                        <p>
                            Дикая природа, крокодилы, обезьяны, сафари на джипах, гостиницы на деревьях и самые опасные приключения ждут тебя!
                        </p> 
                    </section>
                    <section class="blocks-item">
                        <img src="/images/north-america.png" alt="Северная Америка">
                        <h3 class="h3-style">ПУТЕШЕСТВИЯ ПО СЕВЕРНОЙ АМЕРИКЕ</h3>
                        <p>
                            Конечно, мы проедем через всю Америку и побываем как в главных туристических местах, так и в уголках, гдепочти не ступала нога человека!
                        </p> 
                    </section>
                    <section class="blocks-item">
                        <img src="/images/south-america.png" alt="Южная Америка">
                        <h3 class="h3-style">ПУТЕШЕСТВИЯ ПО ЮЖНОЙ АМЕРИКЕ</h3>
                        <p>
                            Южная Америка - место, где хочет побывать каждый. Богатые районы и заброшенные фавелы, опасности и приключения, темпераменьтные люди и многое другое на страницах наших путешествий!
                        </p> 
                    </section>
                    <section class="blocks-item">
                        <img src="/images/kangaroo.png" alt="Австралия">
                        <h3 class="h3-style">ПУТЕШЕСТВИЯ ПО АВСТРАЛИИ</h3>
                        <p>
                            Мы побываем на отдельном континенте. Почему то думая об Австралии, сразу представляешь кенгуру, хотя это совершенно не символ страны!
                        </p> 
                    </section>
                </div>
                <section class="main-form-open">
                    <h2 class="main-form-open-text">Отправьте нам вопрос и мы ответим в ближайшее время</h2>
                    <div class="main-form-open-btn">
                        отправить вопрос
                    </div>
                </section>
                <div class="faq">
                    <div class="faq-item">
                        <div class="faq-item-question">Вопрос</div>
                        <div class="faq-item-answer">Ответ</div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-item-question">Вопрос</div>
                        <div class="faq-item-answer">Ответ</div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-item-question">Вопрос</div>
                        <div class="faq-item-answer">Ответ</div>
                    </div>
                </div>
            </section>
        </main>
<?php
    include('inc/form.php');
    include('inc/footer.php');
?>