const [a, b, c, d] = [3, 5, 1, 15]

const soma = a+b+c+d
const subtracao = d-b
const multiplicacao = a*b
const divisao = d/a
const modulo = a%2

console.log(soma, subtracao, multiplicacao, divisao, modulo)




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