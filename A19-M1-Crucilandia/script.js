// VARIAVEIS -> um lugar que armazena um unico valor variavel
var nome = "Beatriz" // tipo string ""
var idade = 24 // tipo number
var almocou = true // tipo boolean (verdadeiro/falso)

// alterando valor de variaveis
nome = "Joao Miguel"
idade = 18;
almocou = false

// CHAVES {} - bloco de código 
// COLCHETES [] -> conjunto/lista de valores

// VETORES - armazena uma coleção/conjunto/lista de elementos do mesmo tipo.
// VETORES - lista de valores do mesmo tipo 
// VETORES - []
// VETORES - ARRAYS
// 5mb
var nome1 = "ana clara";
// 5mb
var nome2 = "ana vitoria";
// 5mb
var nome3 = "aniel";

// CATEGORIAS -> JUNTAR VALORES PARECIDO varios nomes CATEGORIA NOMES 
// CATEGORIAS -> JUNTAR VALORES PARECIDO varios idades de alunos CATEGORIA IDADE DOSS ALUNOS

// 10mb
//                 elemento      item 
var listaNomes = ["ana clara","ana vitoria", "aniel"];
var listaIdades = [23,25,29];
var listaSalgado = [true,false,true,true];

// SENHAS -> INDEX -> INDICE -> POSIÇÃO
//      INDEX        0        1   
var listaNome = ["beatriz", "tabs"]
// substituindo valores
listaNome[0] = "Joao Miguel"
console.log(listaNome)

// nomeArray.push(item) – Adiciona um item ao final do array.
listaNome.push("Marcilene")
// ["beatriz", "tabs", "Marcilene"]
console.log(listaNome)

// nomeArray.pop() – Remove o último item do array.
listaNome.pop();
// ["beatriz", "tabs"]
console.log(listaNome)

// nomeArray.unshift(item) – Adiciona um item no início do array.
listaNome.unshift("Lauanda");
// ["Lauanda", "beatriz", "tabs"]
console.log(listaNome);

// nomeArray.shift() – Remove o primeiro item do array
listaNome.shift();
console.log(listaNome);

var listaMusicasFesta = [];

var nomeMusica = prompt("digite uma musica");
var nomeMusica1 = prompt("digite uma musica");
var nomeMusica2 = prompt("digite uma musica");
var nomeMusica3 = prompt("digite uma musica");

listaMusicasFesta.push(nomeMusica,nomeMusica1, nomeMusica2, nomeMusica3)
console.log(listaMusicasFesta);

// escrevendo no html a lista de musicas que o usuario inseriu
document.write(`<h1>${listaMusicasFesta[4]}</h1>`);

// document = HTML
// getElementById = buscando tag por id <li id="item1">
// .innerHTML = vai substituir o valor escrito dentro da tag
document.getElementById("item1").innerHTML = `${listaMusicasFesta[0]}`
document.getElementById("item2").innerHTML = `${listaMusicasFesta[1]}`
document.getElementById("item3").innerHTML = `${listaMusicasFesta[2]}`


// document.getElementById("img1").src = "./perfume.png"




