
let tg = window.Telegram.WebApp;
tg.expend();

let username = document.getElementById("name");
let usertel = document.getElementById("tel");
let usermessage = document.getElementById("message");

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(username,usertel,usermessage)
});

document.getElementById("message").addEventListener("focus", function() {
    window.scrollBy(0, 300);
  });