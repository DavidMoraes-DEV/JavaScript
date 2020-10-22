var a = 3; //Evitar o uso de "var"
let b = 4; //Priorizar o uso de "let"

var a = 30; //Variáveis do tipo "var" no JavaScript é possível reedeclarar a mesma variável
b = 40;     //Variáveis do tipo "let" já não é possível

console.log(a, b);

const c = 5; //Variáveis do tipo constante não é possível mudar seu valor inicial

console.log(c);




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