var listMessages = [
    // {remetente: "eu", texto: "Ola beatriz, tudo bem", horario: "19:27"},
    // {remetente: "voce", texto: "fala minha rainha estou bem e voce?", horario: "19:28"},
    // {remetente: "eu", texto: "nada bem, mas seguimos", horario: "19:29"}
];

function exibirMensagens(){
     var ulListmessages = document.getElementById("list-messages");

     ulListmessages.innerHTML = "";
     var classe = "";

     for (let i = 0; i < listMessages.length; i++) {
        if(listMessages[i].remetente === "eu"){
            classe = "my-message";
        }else{
            classe = "other-message"
        }

        ulListmessages.innerHTML += `<li class="${classe}">
            <p style="margin-right: 10px">${listMessages[i].texto}</p>
            <p>${listMessages[i].horario}</p>
        </li>`
     }
}

exibirMensagens()

function sendMessage(remetente){
    // pegando os valores que o usuario digitou na mensagem
    var inputMyMessage = document.getElementById("send-message");
    var inputOtherMessage = document.getElementById("send-message-other");

    console.log(inputMyMessage.value);
    // verificando quem esta enviando a mensagem
    if(remetente === "eu"){
        // inserindo a mensagem no array
        // new Date().getHours()
        // 20
        listMessages.push(
            {remetente: "eu", texto: inputMyMessage.value, horario: `${new Date().getHours()}: ${new Date().getMinutes()}`}
        )
        inputMyMessage.value = "";
        exibirMensagens();
    }else{
        listMessages.push(
            {remetente: "voce", texto: inputOtherMessage.value, horario: `${new Date().getHours()}: ${new Date().getMinutes()}`}
        )
        inputOtherMessage.value = "";
        exibirMensagens();
    }
}


