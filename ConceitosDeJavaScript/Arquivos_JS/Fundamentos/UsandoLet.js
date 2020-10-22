let numero = 1
{
    let numero = 2 //No caso de variáveis do tipo let ela é delimitada por seu escopo e não sobreescreve valores de uma variável com o mesmo nome que esta fora do escopo atual
    console.log("dentro = " + numero)
}

console.log("fora = " + numero)

//Então diferentemente de var o let possui: Escopo Global, Escopo de Função e Escopo de Bloco.




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