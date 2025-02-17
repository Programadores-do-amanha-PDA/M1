var listaProdutos = [
    // {} chave/nomeVariavel: valor
    { img: "smartv.png", titulo: "tv", descricao: "tv 50 polegas, samsung smartv luz de led", preco: 2000 },
    { img: "smartv.png", titulo: "tv led", descricao: "tv 40 polegas, samsung smartv luz de led", preco: 1500 },
    { img: "smartv.png", titulo: "tv sobre", descricao: "tv 20 polegas, samsung smartv luz de led", preco: 1000 }
]

// function exibirLista() {
//     console.log("Fala galera")
//     for (var i = 0; i < listaProdutos.length; i++) {
//         // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
//         document.write(`<li>
//                 <img src="${listaProdutos[i].img}">    
//                 <h1>${listaProdutos[i].titulo}</h1>
//                 <p>${listaProdutos[i].descricao} </p>
//                 <p style="color: gray; text-decoration: line-through;"> ${listaProdutos[i].preco * 2}</p>
//                 <p style="color: green"> ${listaProdutos[i].preco}</p>
//                 <button style="background-color: green; color: white; border-radius: 5px; padding: 10px">compre agora</button>
//                 </li>
//                 `)
//     }
// }

var listaCarrinho = [];

function exibirCarrinho(){
    for (var i = 0; i < listaCarrinho.length; i++) {
        // armazenando a TAG HTML <div id="carrinho"></div> dentro de uma variavel
        // id = identificador (CPF)
        var ulListaCarrinho = document.getElementById("carrinho");

        // innerHTML -> propriedade que EDITA O HTML
        // += -> sua funcionalidade é criar um novo item <li> ao inves de substituir o anterior
        ulListaCarrinho.innerHTML += `<li>
                                        <p>${listaCarrinho[i].titulo}</p>
                                        <p style="color: green"> ${listaCarrinho[i].preco}</p>
                                      </li>
                                    `;
    }
}

// index -> posição / senha / indice
function addCarrinho(index){
   // buscando UM elemento dentro do array pela sua POSICAO
   // listaProdutos[index]
   
   // push -> adiciona um elemento no final do array
   listaCarrinho.push(listaProdutos[index]);
   exibirCarrinho();
}

// var listaConversaZapZap = [];

// function buscarConversa(index){
//    listaConversaZapZap[index]
// }


// function somarCarrinho(){
//     var valorTotal = 0;
//     for (var i = 0; i < listaCarrinho.length; i++) {
//         // estou percorrendo TODO array de carrinho 
//         // olhando apenas o preco de cada produto dentro do carrinho
//         // somando e inserindo o valor da soma em uma variavel
//         valorTotal = valorTotal + listaCarrinho[i].preco;
//     }

//     document.getElementById("valorTotal").innerHTML = `${valorTotal}`;
// }

function exibirLista() {
    for (var i = 0; i < listaProdutos.length; i++) {
        // armazenando a TAG HTML <div id="lista"></div> dentro de uma variavel
        // id = identificador (CPF)
        var ulListaProdutos = document.getElementById("lista");

        // innerHTML -> propriedade que EDITA O HTML
        // += -> sua funcionalidade é criar um novo item <li> ao inves de substituir o anterior
        ulListaProdutos.innerHTML += `<li>
                                        <img src="${listaProdutos[i].img}">    
                                        <h1>${listaProdutos[i].titulo}</h1>
                                        <p>${listaProdutos[i].descricao} </p>
                                        <p style="color: gray; text-decoration: line-through;"> ${listaProdutos[i].preco * 2}</p>
                                        <p style="color: green"> ${listaProdutos[i].preco}</p>
                                        <button onclick="addCarrinho(${i})" style="background-color: green; color: white; border-radius: 5px; padding: 10px">adicionar ao carrinho</button>
                                      </li>
                                    `
    }
}

// PONTOS IMPORTANTES AULA 23
// ONCLICK -> Um atributo da tag button <button onclick="addCarrinho(${i})"
// que adiciona uma função para ser executar quando o botao for clicado

// innerHTML -> é uma propriedade do JavaScript usada para modificar/substituir o conteudo escrito de uma tag HTML
// document.getElementById("titulo").innerHTML = `<p style="color: pink"> novo texto </p>`









