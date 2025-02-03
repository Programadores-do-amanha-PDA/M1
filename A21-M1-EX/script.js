let nomes = ["Beatriz", "Joao", "Daniel"];

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);

for(var i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

let produtos = [
    {name: "iphone 15", price: 14.000},
    {name: "smart tv", price: 2.300},
    {name: "notebook", price: 1.000},
    {name: "notebook", price: 1.000},
    {name: "notebook", price: 1.000},
]

for(var i = 0; i < produtos.length; i++){
    let li = document.getElementsByTagName("li");
    li[i].innerHTML = `${produtos[i].name} R$ ${produtos[i].price.toFixed(3)}`;
}

let questions = [
    {question: "quantos anos tem a lua? ", answer: 32},
    {question: "quantos planetas temos no nosso sistema solar? ", answer: 9},
    {question: "qual o nome da mãe lucinda? ", answer: "lucinda"},
]

for(var i = 0; i < questions.length; i++){
    let response = prompt(questions[i].question);

    if(questions[i].answer.toString() === response){
        alert(`sua resposta esta correta`)
    }else{
        alert(`sua resposta esta errada -> resposta certa ${questions[i].answer}`);
        i = -1;
    }
}
