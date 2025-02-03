// Função -> Ação que irá ser repetida varias vezes
// Exemplos de função na vida real
// Andar
// maquina de café -> antigamente aqueciamos a agua, pegavamos 
// o papel toalha que coa café, depois pegamos a agua quente e coloca o café 
// junto dentro de um copo.

// PRIMEIRO PASSO - CRIAR
// declarar variaveis e funções
// declaração de variavel serve para armazenar dados
// declaração de fuções serve para definir uma ação
// que será executada

// SEGUNDO PASSO - UTILIZAR
// acessar variaveis 
// chamar função

// entrada de dados | processamento | saída

// ESTRUTURA DE UMA FUNÇÃO
// o que é ->  function
// o que a função faz -> nameFunction
// quais são os valores necessarios para sua execução -> parametros
// o que ela fará -> bloco de código
// o que ela irá retornar -> return


// Uma empresa solicitou um sistema que calcule quanto falta para atingir suas metas
// os requisitos para criar este sistema é que ele receba o valor final da meta e o valor atual. 
// Ao final o sistema deve retornar o resultado e apresenta-lo no console/alert

// Uma empresa solicitou um sistema que calculasse a média de idade dos funcionarios por setor
// os requisitos para criar este sistema é que ele receba 4 idades e o nome do setor operacional.
// Ao final o sistema deve retornar o resultado e apresenta-lo no console/alert

// Uma empresa solicitou um sistema que verificasse se seus funcionarios poderiam ou nao se candidatar
// para cargos de gerencia. Para poder se inscrever um funcionario tem que ter no minimo 25 anos
// e estar trabalhando na empresa a mais de 2 anos. Caso o funcionario completar esses requisitos o
// sistema deve retornar uma mensagem de aprovação, caso contrario uma mensagem de reprovação.

function showMeta(metaFinal, metaAtual){
    var resultado = metaFinal - metaAtual;
    return resultado;
}

console.log(showMeta(10,3));

function idadeMedia(idade1, idade2, idade3, idade4, setor){
    var media = (idade1 + idade2 + idade3 + idade4) / 4;
    return `Setor ${setor} tem uma média de idade de ${media}`;
}

console.log(idadeMedia(30,23,26,33, "facilitação"))


function aprovacaoGerente(usuario, idade,tempoTrabalho){
   if(idade >= 25 && tempoTrabalho > 2){
     return `funcionario ${usuario} aprovado para inscrição`
   }else{
     return `funcionario ${usuario} reprovado para inscrição`
   }
}

console.log(aprovacaoGerente("beatriz", 25, 2.2))