console.log("ola mundo")

// declaração funcao
//             parametros: o que estou recebendo
function somar(num1, num2){
    return num1 + num2;
}

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
//document.write(`<h1 style="color: yellow">${somar(23,5)}</h1>`);// saida 
//prompt // entrada

// INTERPOLAÇÃO -> UNIR VARIAVEIS COM STRING
// adicionar crase `` dentro das crases quando for utilizar
// variaveis ou funções ${variavel/funcao}
// ex: `<h1>${nomeUsuario}</h1>
var nome = "Beatriz";
var nomeJogo = "CS"
console.log("ola " + nome + " seja bem vindo " + nomeJogo) // concatenando
console.log(`ola ${nome} seja bem vindo ${nomeJogo}`) // interpolação