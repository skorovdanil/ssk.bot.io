
window.onload = function() {
    // Получить поле ввода номера телефона
    var telInput = document.getElementById('tel');
  
    // Применить маску на поле ввода номера телефона
    $(telInput).inputmask("+7 (999) 999-99-99");
  
    // Добавить прослушиватель события ввода
    telInput.addEventListener('fcus', function() {
      formatPhone(this);
    });
  };

var textarea = document.getElementById("message");
textarea.addEventListener("focus", function() {
document.body.style.height = "200vh";
});

textarea.addEventListener("blur", function() {
document.body.style.height = "100vh";
});

let tg = window.Telegram.WebApp;
tg.expend();

let username = document.getElementById("name");
let usertel = document.getElementById("tel");
let usermessage = document.getElementById("message");

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(username,usertel,usermessage)
});


