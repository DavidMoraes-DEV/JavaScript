let num1 = 1
let num2 = 2

num1++

console.log(num1)

--num1

console.log(num1)
console.log(++num1 === num2--)
console.log(num1 === num2)




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