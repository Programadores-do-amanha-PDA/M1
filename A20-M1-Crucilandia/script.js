var listaMusicasFesta = [];

// CODIGO ANTIGO
// var nomeMusica = prompt("digite uma musica");
// var nomeMusica1 = prompt("digite uma musica");
// var nomeMusica2 = prompt("digite uma musica");
// var nomeMusica3 = prompt("digite uma musica");

// LAÇOS DE REPETIÇÃO -> ESTRUTURA DE CONTROLE
var count = 1;

// // enquanto(condição for verdadeira){
// //    faça isso 
// // }
// while (count < 5) {
//     var nomeMusica = prompt("digite uma musica");
//     listaMusicasFesta.push(nomeMusica);
//     count = count + 1;
// }
// console.log(listaMusicasFesta)

var listaNomes = ["Beatriz", "Kauanny", "Luisa"];
// console.log(listaNomes[0]);
// console.log(listaNomes[1]);
// console.log(listaNomes[2]);

// condição -> quantidade de vezes que queremos 
// repetir o mesmo código
var vezes = 0;
while(vezes < 3){
    // código que queremos repetir 
    document.write(`incrivel divas ${listaNomes[vezes]} <br>`);
    // atualização do valor vezes
    vezes = vezes + 1;
}

var numero = 0;

while(numero < 5){
    document.write(`incrivel <br>`);
    numero = numero + 1;
}

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