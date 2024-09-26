// tipos de dados?
// string | number | boolean

// tipos de variaveis?
// var | let | const

// quando utilizar var?
// em um contexto global 
// visivel em qualquer lugar do arquivo

// quando utilizar let?
// em um contexto local
// visivel apenas no escopo que foi criada

// quando utilizar const?
// em um contexto imutavel 

// EX GLOBAL
// var nome = "Beatriz";

// console.log(nome);

// function showName(){
//     console.log(nome)
// }

// showName()

// EX LOCAL
// function showName(){
//     let nome = "Beatriz local"
//     console.log(nome);
// }

// showName();
// console.log(nome);

// EX CONST
// function showName(){
//     var nomeUsuario = "Beatriz";
//     nomeUsuario = "Daniel";
//     console.log(nomeUsuario)
// }

// showName();
// console.log(nomeUsuario);

// var tipo de variavel que todos podem acessar e alterar
// criaram 2 vertentes do var 

// 1 -> podemos acessar apenas dentro de um bloco de código e alterar
// 2 -> podemos acessar apenas dentro de um bloco de código e nao alterar

// Uma empresa solicitou um sistema que registrasse os dados
// de um usuario onde a primeira letra do seu nome tem que ser obrigatóriamente maiuscula.



















// Uma empresa solicitou um sistema que mostrasse na tela o salario do 
// funcionario com 10% de desconto dos impostos. Esse salario com
// desconto deve ser apresentado na tela.
// EX: passado salario de 1000 reais / deve aparecer na tela 900 reais

function descontoSalario(salario, desconto){
    let descontoString = `0.${desconto}`;
    return salario - (salario * parseFloat(descontoString));
}
















// Uma empresa solicitou um sistema que mostrasse o salario do 
// funcionario baseado no desconto passado. Esse salario com 
// desconto deve ser apresentado na tela.
// EX: passado salario de 1000 reais e desconto de 12% / deve aparecer na tela 880
//console.log(descontoSalario(1000, 0.12));
console.log(descontoSalario(1000, 24));
// salario com desconto 900