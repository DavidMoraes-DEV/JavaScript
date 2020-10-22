console.log()

console.log(7 / 0) //Na linguagem JavaScript quaquer numero divido por 0 não gerará um erro e sim um "Infinity", diferentemente de outras linguagens que dá erro.

console.log("10" / 2) //Como a Linguagem JavaScript é fracamente tipada se tentar dividir um valor que esta como string por um numero em outras linguagem não seria possível porém em JavaScript é possível

console.log("Show!" * 2) //Nesse caso dará erro pois o conteúdo da string não é número

console.log(0.1 + 0.7) //Pode haver imprecisão entre calculos com pontos flutuantes.




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
