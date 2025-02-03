// variavel é uma caixa que guardamos informações
var nome = "Maria Bethania ";
var meuNome = "meu nome é Joao ";
var idade = 23;
// var -> criando uma VARiavel
// nome -> o nome unico/identificador da variavel
// = -> recebe um valor
// na frente do igual vem o valor a ser guardado

console.log(meuNome + nome + "tenho " + idade + " anos");
// meu nome é maria


// PADRAO DE NOME DE VARIAVEL
// obs: nome de variavel nao tem ESPAÇO/ ACENTO/ Ç
// obs: nome de variavel SEMPRE começa com a primeira letra minuscula
// obs: nome de variavel nao pode conter preposição/conjunção (de, a, o, da)
// cammelCase -> Camelo
var nomeUsuario = "Beatriz Ferreira dos Santos";

// snack_case -> Cobra
//var nome_usuario = "Beatriz Ferreira dos Santos";

// REATRIBUIÇÃO -> Substituindo o valor anterior por um novo
// console.log(nomeUsuario)
nomeUsuario = "Joao Miguel Fernandes Souza";
console.log(nomeUsuario)
nomeUsuario = "Joao Miguel Fernandes Souza 2";
console.log(nomeUsuario)


// TIPOS -> conteudo das nossas variaveis 
// String -> TEXTOS -> dentro de aspas "" ou ''
// Number -> NUMEROS - 213
// Boolean -> TRUE / FALSE 

// TEXTOS -> concatena -> somar textos 
// NUMEROS -> calcula -> soma(+) subtrai(-) multiplica(*) divide(/)

// par + par = par
// impar + impar = par
// impar + par = impar

// texto + numero = texto
// texto + texto = texto
// numero + numero = numero

var idade = 24.6
var nome = "Beatriz"
var nomeIdade = nome + idade
console.log(nomeIdade)
// typeof -> recurso para saber qual o tipo da variavel
console.log(typeof nomeIdade)
var calculo = 24 - 2;
console.log("sua idade é: "+ calculo)



var notaJoao = "9";
var notaRyan = 10;
var resultado = notaJoao + notaRyan;
console.log(resultado)