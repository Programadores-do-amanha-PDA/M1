console.log("ola mundo")

// declaração funcao
//             parametros: o que estou recebendo
// function somar(num1, num2){
//     return num1 + num2;
// }

// chamando a função
//    argumentos: o que estou passando
// somar(3,40);
// somar(32,40);
// somar(30,40);
// somar(89,40);
// somar(8963267637,40);

// var numero = String(23)
// var nome = "Beatriz" 
// console.log(nome.toLowerCase());
var teste = 90
// document = html
// document.write = escrevendo no HTML
//document.write(`<h1 class="title">${somar(23,5)}</h1>`);// saida 

prompt // entrada
// 1. criar uma funcao que recebe como parametro nome completo
// 2. funçao deve EXIBIR no HTML 
//    a. o nome completo do usuario 
//    b. a quantidade total de letras no nome (funçao nativa js)

// INTERPOLAÇÃO -> UNIR VARIAVEIS COM STRING
// adicionar crase `` dentro das crases quando for utilizar
// variaveis ou funções ${variavel/funcao}
// ex: `<h1>${nomeUsuario}</h1>
// var nome = "Beatriz";
// var nomeJogo = "CS"
// console.log("ola " + nome + " seja bem vindo " + nomeJogo) // concatenando
// console.log(`ola ${nome} seja bem vindo ${nomeJogo}`) // interpolação




// document.getElementById("title").innerHTML = `ola ${nome} seja bem vindo ${nomeJogo}`



function somar(num1, num2){
    return num1 + num2;
}

// entrada de dados com prompt
var numero1 = parseInt(prompt("digite o primeiro valor"));
var numero2 = parseInt(prompt("digite o segundo valor"));

// pegando o HTML, buscando dentro do HTML um id="resultado"
// substituindo(innerHTML/innerText) o texto pelo resultado da função somar()
document.getElementById("resultado").innerHTML = somar(numero1,numero2);
document.getElementById("resultado").style.color = "purple";
document.getElementById("resultado").style.color = "purple";
document.getElementById("resultado").style.fontSize = "90px";