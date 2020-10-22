var numero = 1
{
    var numero = 2
    console.log("Dentro = " + numero)
}

console.log("fora = " + numero)




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