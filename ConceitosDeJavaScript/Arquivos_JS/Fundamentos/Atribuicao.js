const a = 7
let b = 3

b += a //Atribuição aditiva
console.log(b)

b -= 4 //Atribuição subtrativa
console.log(b)

b *= 2 //Atribuição multiplicativa
console.log(b)

b /= 2 //Atribuição Divisiva
console.log(b)

b %= 2 //Atribuição modular (resto)
console.log(b)




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