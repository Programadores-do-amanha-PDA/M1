var listaMusicasFesta = [];

// CODIGO ANTIGO
// var nomeMusica = prompt("digite uma musica");
// var nomeMusica1 = prompt("digite uma musica");
// var nomeMusica2 = prompt("digite uma musica");
// var nomeMusica3 = prompt("digite uma musica");

// LAÇOS DE REPETIÇÃO -> ESTRUTURA DE CONTROLE
// var count = 1;

// // enquanto(condição for verdadeira){
// //    faça isso 
// // }
// while (count < 5) {
//     var nomeMusica = prompt("digite uma musica");
//     listaMusicasFesta.push(nomeMusica);
//     count = count + 1;
// }
// console.log(listaMusicasFesta)

// var listaNomes = ["Beatriz", "Kauanny", "Luisa"];
// console.log(listaNomes[0]);
// console.log(listaNomes[1]);
// console.log(listaNomes[2]);

// condição -> quantidade de vezes que queremos 
// repetir o mesmo código
// var vezes = 0;
// while(vezes < 3){
//     // código que queremos repetir 
//     document.write(`incrivel divas ${listaNomes[vezes]} <br>`);
//     // atualização do valor vezes
//     vezes = vezes + 1;
// }

// var numero = 0;

// while(numero < 5){
//     document.write(`incrivel <br>`);
//     numero = numero + 1;
// }



// console.log(listaNomes[0]);
// console.log(listaNomes[1]);
// console.log(listaNomes[2]);

// LISTAR -> FOR 
// LISTAR -> MOSTRAR LISTA NA TELA
// LISTAR - PERCORRER UM ARRAY
// PERCORRER ARRAY - OLHAR TODOS OS ITENS DENTRO DO ARRAY

// index++  ->  index = index + 1;
//  index= senha;enquanto SENHA <= quantidade maxima de itens; incremento 
// var index = 0 -> variavel contadora
// index <= listaNomes.length -> condição 
// index++ -> incremento
var listaNomes = ["Beatriz", "Kauanny", "Luisa", "Beatriz", "Kauanny", "Luisa", ];
for(var index = 0; index < listaNomes.length; index++){
    document.write(`incrivel divas ${listaNomes[index]} <br>`)
}
var numeros = [24,432, 9854, 844, 564];
for(var i = 0; i < numeros.length; i++){
    document.write(`<li style="color: blue">${numeros[i]}</li>`)
}

var produtos = ["Notebook", "Smartphone", "Mouse", "Teclado", "Monitor"];
for(var i = 0; i < produtos.length; i++){
    document.write(`<li style="color: purple">${produtos[i]}</li>`)
}

const musicas = [
    "Bohemian Rhapsody - Queen",
    "Imagine - John Lennon",
    "Hotel California - Eagles",
    "Smells Like Teen Spirit - Nirvana",
    "Billie Jean - Michael Jackson"
];

for(var i = 0; i < musicas.length; i++){
    document.write(`<li style="color: purple">${musicas[i]}</li>`)
}


//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  10







// listaMusicasFesta.push(nomeMusica, nomeMusica1, nomeMusica2, nomeMusica3)
// console.log(listaMusicasFesta);

// // escrevendo no html a lista de musicas que o usuario inseriu
// document.write(`<h1>${listaMusicasFesta[4]}</h1>`);

// // document = HTML
// // getElementById = buscando tag por id <li id="item1">
// // .innerHTML = vai substituir o valor escrito dentro da tag
// document.getElementById("item1").innerHTML = `${listaMusicasFesta[0]}`
// document.getElementById("item2").innerHTML = `${listaMusicasFesta[1]}`
// document.getElementById("item3").innerHTML = `${listaMusicasFesta[2]}`