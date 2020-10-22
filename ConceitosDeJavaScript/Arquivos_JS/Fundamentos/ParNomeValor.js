// par nome/valor
const saudacao = "Oi" //contexto léxico 1

function exec() {
    const saudacao = "Tchau" //contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Brasil",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)




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