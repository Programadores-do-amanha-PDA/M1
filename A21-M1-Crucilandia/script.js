// var listaNomes = ["Beatriz", "Kauanny", "Luisa", "Beatriz", "Kauanny"];

// // var index = 0 -> variavel contadora UNICA FUNÇÃO DESTA VARIAVEL É SER UM VALOR QUE AUMENTA DE 1 EM 1
// // index <= listaNomes.length -> condição PARA NOSSA REPETIÇÃO PARAR
// // index++ -> incremento AUMENTAR DE 1 EM 1 A VARIAVEL index

// // repetir um numero limitado de vezes uma ação
// for (var index = 0; index < listaNomes.length; index++) {
//     document.write(`incrivel divas ${listaNomes[index]} <br>`)
// }

// document.write(`incrivel diva ${listaNomes[0]} <br>`)
// document.write(`incrivel diva ${listaNomes[1]} <br>`)
// document.write(`incrivel diva ${listaNomes[2]} <br>`)
// document.write(`incrivel diva ${listaNomes[3]} <br>`)
// document.write(`incrivel diva ${listaNomes[4]} <br>`)

// Foi solicitado um sistema que crie uma lista de compras
// peça ao usuario que digite os produtos e insira eles 
// na lista criada ao final do sistema

// var / if / funçoes / for / array / prompt

// crie uma lista de compras [x]
var listaCompras = [];

for (var i = 0; i < 4; i++) {
    // peça ao usuario que digite os produtos [x]
    var produto = prompt("digite o nome de um produto para adicionar na lista");

    // insira eles na lista criada [x]
    listaCompras.push(produto);
}

// função que exibe a lista de compras para o usuario
function exibirLista(){
    console.log(listaCompras)
    for (var i = 0; i < listaCompras.length; i++) {
        // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
        document.write(`<li>${listaCompras[i]}</li>`)
    }
}

exibirLista()

// Crie um sistema que crie uma lista de tarefas
// peça ao usuario que digite as suas tarefas e insira elas 
// na lista criada ao final do sistema

