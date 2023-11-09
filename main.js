window.onload = function() {
    var telInput = document.getElementById('tel');
    Inputmask("+7 (999) 999-99-99").mask(telInput);
    telInput.addEventListener('input', function() {
      if (this.value.length === 18) {
      }
    });
  
    var textareaElements = document.querySelectorAll("#message, #tel, #name");
  
    var isMobile = /iPhone|iPad|iPod|Android|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
  
    if (isMobile) {
      textareaElements.forEach(function(textarea) {
        textarea.addEventListener("focus", function() {
          document.body.style.height = "120vh";
        });
        textarea.addEventListener("blur", function() {
          document.body.style.height = "100vh";
        });
      });
    };
    let tg = window.Telegram.WebApp;
    tg.expand();
    let username = document.getElementById("name").value;
    let usertel = document.getElementById("tel").value;
    let usermessage = document.getElementById("message").value;

    tg.MainButton.text = "Отправить"; //изменяем текст кнопки 
    tg.MainButton.setText ("Отправить"); //изменяем текст кнопки 
    tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
    tg.MainButton.color = "#A057EF"; //изменяем цвет бэкграунда кнопки
    btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.MainButton.isVisible){ //если кнопка показана 
        tg.MainButton.hide() //скрываем кнопку 
      }
      else{ //иначе
        tg.MainButton.show() //показываем 
      }
    });
    Telegram.WebApp.onEvent("mainButtonClicked", function(){
      tg.sendData(username,usermessage,usertel);
      tg.close();
    });
  };