console.log("\nSentenca de codigo\n"); //Na linguagem JavaScrip o ponto e vírgula no final não é obrigatório.

{ //Bloco de código delimitado por {}
    {
        console.log("Hello World!!!") //Padrão do curso (sem ponto e vírgula no final)
    }
}




/*
==================================================================
==---------------------- FINALIZAR CONSOLE ---------------------==
==================================================================
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