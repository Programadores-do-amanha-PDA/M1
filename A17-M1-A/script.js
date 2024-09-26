// Uma empresa solicitou um sistema que VERIFICASSE se seus funcionarios poderiam ou nao
// se candidatar a cargos de gerencia. Para o funcionario poder se inscrever ele tem que ter 
// no minimo 25 anos E estar trabalhando na empresa a mais de 2 anos. Caso o funcionario
// completar esses 2 requisitos o sistema deve retornar uma mensagem de aprovação, caso contrario
// uma mensagem de reprovação.

function verificarCandidatura(nomeUsuario,idadeFuncionario,tempoTrabalho){
    if(idadeFuncionario >= 25 && tempoTrabalho > 2){
       return `Funcionario ${nomeUsuario} aprovado para inscrição`;
    }else{
        return `Funcionario ${nomeUsuario} reprovado para inscrição`
    }
}

var nome = prompt("digite seu nome")
var idade = prompt("digite sua idade")
var tempo = prompt("digite quantos anos esta na empresa")

console.log(verificarCandidatura(nome,idade, tempo))

// Uma empresa solicitou um sistema que calculasse a média de idade dos funcionarios por setor
// os requisitos para criar este sistema é que ele receba 4 idades e o nome do setor operacional.
// Ao final o sistema deve retornar o resultado e apresenta-lo no console/alert

function calcularMedia(age1, age2, age3, age4, nomeSetor){
    var valorMedia = (age1 + age2 + age3 + age4) / 4;
    return `O setor ${nomeSetor} tem uma media de idade de ${valorMedia}`
}

var idade1 = prompt("digite a primeira idade")
var idade2 = prompt("digite a segunda idade")
var idade3 = prompt("digite a terceira idade")
var idade4 = prompt("digite a quarta idade")
var setor = prompt("digite o setor da empresa")

console.log(calcularMedia(parseInt(idade1), parseInt(idade2), parseInt(idade3), parseInt(idade4), setor))

// RECURSO QUE VIMOS EM AULA NECESSARIO PARA RESOLUÇÃO
// funçoes -> function
// parametros -> params
// argumentos -> args
// retorno -> return
// variaveis -> let | const

// ------------------------------------------
// Tipos de dados?
// number | boolean | string
let idade = 23;
let status = true;
let nome = "Beatriz";

// tipos de variaveis?
// var | let | const 
var escopoGlobal = "todas tem acesso e podem mudar meu conteudo";
let escopoLocalAlteravel = "apenas quem esta dentro do mesmo bloco de código que eu pode me ver e alterar";
const escopoLocalImutavel = "apenas quem esta dentro do mesmo bloco de código que eu pode me ver e não sou alteravel";

var nome = "Beatriz";
function showName(){
    console.log(nome)
}

showName()
console.log(nome)


// LET -> Escopo LOCAL 
// essa variavel visivel e alteravel apenas dentro de um bloco de código
// quando utilizar?
// quando queremos declarar uma variavel que será alteravel e visivel somente 
// dentro do bloco de código que foi criada

function showName2(){
    // variavel nome nao existe fora dessa funçao
    let nome = "Daniel"
    nome = "Brendinha"
    console.log(nome)
}

showName2()

// CONST -> É uma variavel Constante OU SEJA NAO MUDA Escopo LOCAL
// essa variavel visivel e imutavel apenas dentro de um bloco de código

function showName(){
    // variavel nome nao existe fora dessa funçao e nao pode ser alterada 
    const nome = "Daniel";
    console.log(nome)
}

showName()

// quero criar uma variavel status logado
let statusLogado = true;
// informações do perfil do usuario 