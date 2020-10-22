//Comentário de uma linha
console.log("\nLinha 1");

/*
Comentários de
múltiplas linhas
*/
console.log("Linha 2");




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