window.onload = function() {
    var telInput = document.getElementById('tel');
    Inputmask("+7 (999) 999-99-99").mask(telInput);
    telInput.addEventListener('input', function() {
      if (this.value.length === 18) {
      }
    });


    let tg = window.Telegram.WebApp;
    tg.expand();


    tg.MainButton.text = "Отправить"; //изменяем текст кнопки 
    tg.MainButton.setText ("Отправить"); //изменяем текст кнопки 
    tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
    tg.MainButton.color = "#A057EF"; //изменяем цвет бэкграунда кнопки


    let form = document.getElementById('form');


    form.addEventListener('input', function(){ 
      let username = document.getElementById("name").value;
      let usertel = document.getElementById("tel").value;
      if (username.length > 5 && usertel.length > 10){ 
        tg.MainButton.show()
      }
      else{
        tg.MainButton.hide() 
      }
    });


    Telegram.WebApp.onEvent("mainButtonClicked", function(){
      let name = document.getElementById("name").value;
      let tel = document.getElementById("tel").value;
      let message = document.getElementById("message").value;
      let data = {
        name: name,
        tel: tel,
        message: message
      }
      tg.sendData(JSON.stringify(data));
      tg.close();
    });
  };