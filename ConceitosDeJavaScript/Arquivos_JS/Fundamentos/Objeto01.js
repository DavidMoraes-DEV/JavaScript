const prod1 = {} //Somente o par de chaves vazia {} seria um objeto vazio

prod1.nome = "Celular Ultra Mega" //Dentro do objeto prod1 criamos uma chave chamada nome que recebeu o valor da string entre ""
prod1.preco = 4998.90

console.log(prod1)

const prod2 = {
    nome: "Casima Polo",
    preco: 79.90
}

console.log(prod2)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
let readline = require('readline');
let resp = "";

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("\n\nPress Enter to Exit...", function (answer) {
    leitor.close();
});