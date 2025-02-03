// let name;

// while(!name){
//    name = prompt("digite seu nome para continuar o cadastro")
// }

// let consentimento = prompt("digite sim para consentir o compartilhamento dos seus dados")

// while(consentimento != "sim"){
//        consentimento = prompt("digite sim para consentir o compartilhamento dos seus dados")
// }

let email = prompt("Digite seu email de login");

// // enquanto o email de usuario for diferente do cadastrado 
// while(email != "bea@hotmail.com"){
//     email = prompt("Email incorreto, digite novamente para efetuar o login")
// }

// let consentimento;

// do{
//    consentimento = prompt("digite sim para consentir o compartilhamento dos seus dados");
// }while(consentimento != "sim")

// let listName = ["Beatriz", "Daniel", "Joao"]

// for(var i = 0; i < listName.length; i++){
//         console.log(listName[i])
// }


// objeto é representado por {}
// dentro de um objeto trabalhamos com CHAVE: VALOR
// composto 
let perguntas = [
        {pergunta:"qual o nome do distrito federal", resposta: "Brasilia"},
        {},
        {}
    ];
    
    let resposta = prompt("digite sua resposta");
    
    for(var i = 0; i < perguntas.length; i++){
        if(resposta === perguntas[0].resposta){
            console.log("voce acertou")
            break;
        }
    }
    
    // "qual o nome do distrito federal", "quantas estrelas tem no ceu", "qual a distancia do Brasil pra China"