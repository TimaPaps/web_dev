        <section class="form-message">
            <div class="form-message-block">
                <div class="form-message-block-logo"></div>                
                <h4>Напишите нам:</h4>
                <form id="questionForm" action="/handlers/form.php" method="GET" autocomplete="off">
                    <div class="form-item">
                        <input data-length="30" type="text" name="fullName" placeholder="ФИО">
                    </div>
                    <div class="form-item">
                        <input data-length="25" type="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-item">
                        <input data-length="15" type="number" name="phone" placeholder="Телефон">
                    </div>
                    <div class="form-item">                            
                        <textarea data-length="50" name="textMessage" placeholder="Ваше сообщение"></textarea>
                    </div>
                    <div class="form-item">
                        <h3>Как с тобой связаться:</h3>
                        <input type="checkbox" name="contact[]" value="по телефону"> по телефону<br>
                        <input type="checkbox" name="contact[]" value="по email"> по email<br>
                        <input type="checkbox" name="contact[]" value="по WhatsApp"> по WhatsApp<br>
                    </div>
                    <div class="form-item">
                        <select name="trips[]" id="">
                        <option hidden>--Выбери своё путешествие--</option>
                            <optgroup label="--Мы предлагаем: --">
                                <option value="России">Путешествия по России</option>
                                <option value="Европе">Путешествия по Европе</option>
                                <option value="Африке">Путешествия по Африке</option>
                                <option value="Северной Америке">Путешествия по Северной Америке</option>
                                <option value="Южной Америке">Путешествия по Южной Америке</option>
                                <option value="Австралии">Путешествия по Австралии</option> 
                            </optgroup>                           
                        </select>
                    </div>
                    <div class="form-item">
                        <input type="submit" value="Отправить письмо">
                    </div>
                    <div class="form-item">
                        <input type="reset">    
                    </div>                
                </form> 
                <div class="form-message-block-button"></div>                                   
            </div>
        </section>