// TIPOS DE DADOS
// STRING - TEXTO
// NUMBER - NUMEROS
// BOOLEAN - TRUE / FALSE

// IF ELSE
// SE (CONDIÇÃO) {
//  FAÇA ALGO - TRUE
// }SE NÃO{
//   FAÇA ALGO - FALSE
// }
var almoco = false;

// 1 sinal de igual estou recebendo ou atribuindo um valor =
// 2 sinais de igual estou comparando valores ==

if(almoco == true){
    console.log("pode comer a sobremesa")
}else{
    console.log("nao pode comer sobremesa porque nao almoçou")
}

// 1. Compra o miojo - miojo de pote 
// 2. Colocar a agua para ferver dentro de uma panela. - buli de café
// 3. Abrir o pacote - tirar a tampa
// 4. Tirar o miojo de dentro do pacote e colocar na agua. - colocar no microondas
// 5. Esperar 5min.
// PRONTO 

var emailUser = "t5n@programadoresdoamanha.org.br"
var bancoDados = "t5n@programadoresdoamanha.org.br"

if(emailUser == bancoDados){
    console.log("logado")
}else{
    console.log("email nao encontrado")
}

// // VERIFICAR - IF ELSE
var miojoMercado = "miojo saquinho";

if(miojoMercado != "miojo pote"){
    console.log("vamos fazer o miojo na panela")
}else{
    console.log("vamos fazer o miojo no microondas")
}

// if(miojoMercado == "miojo saquinho"){
//     console.log("pegar a panela e colocar agua para ferver dentro dela")
// }else{
//     console.log("colocar o miojo de pote dentro do microondas e aquecer por 5min")
// }

// tv tem que ter no minimo 32 polegas
// tv tem que custar no maximo 1900
var polegadaTv = 10;
var preco = 1000;

// AND - E - && TODAS AS CONDIÇOES DEVEM SER VERDADEIRAS
// OR - OU - || APENAS UMA CONDIÇÃO PRECISA SER VERDADEIRA
//      maior ou igual a 32
if(polegadaTv >= 32 && preco <= 1900){
    console.log("comprei a TV");
}else{
    console.log("nao vou comprar, nao gostei!!");
}

// EX: Verificar se o cartão de débito passou ao comprar brusinha de 150 reais
var cartaoDebito = 400;
var brusinha = 150;
if(brusinha < cartaoDebito){
    console.log("compra aprovada sobrou: "+ cartaoDebito - brusinha)
}else{
    console.log("compra negada por falta de crédito");
}

// 1. Verificar se um número é positivo ou negativo
// 2. Saber se é dia ou noite (com base na hora)
// 3. Descobrir se está quente ou frio (com base 25C)
// 4. Verificar se um número é múltiplo de 5
// 5. Verificarar se um aluno passou ou foi reprovado
// 6. Verificar se um número é par ou ímpar
