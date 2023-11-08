window.onload = function() {
    var telInput = document.getElementById('tel');
    Inputmask("+7 (999) 999-99-99").mask(telInput);
    telInput.addEventListener('input', function() {
      if (this.value.length === 18) {
      }
    });

    var textareaElements = document.querySelectorAll("#message, #tel, #name"); // Выборка элементов по их ID

    textareaElements.forEach(function(textarea) {
      textarea.addEventListener("focus", function() {
        document.body.style.height = "120vh";
      });
      textarea.addEventListener("blur", function() {
        document.body.style.height = "100%";
      });
    });


    let username = document.getElementById("name");
    let usertel = document.getElementById("tel");
    let usermessage = document.getElementById("message");

    function sendDataToTelegram() {
    }

    Telegram.WebApp.onEvent("mainButtonClicked", function(){
      sendDataToTelegram(username.value, usertel.value, usermessage.value);
    });
  };