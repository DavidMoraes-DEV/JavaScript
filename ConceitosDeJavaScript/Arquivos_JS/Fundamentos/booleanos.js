let isAtivo = false
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

isAtivo = 1;

console.log(!!isAtivo)

console.log("\nOs Verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("\nOs Falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("\nPra finalizar...")
console.log(!!("" || null || 0 || " "))

let nome = "" //Se a variável nome estiver vazia no console.log abaixo pulará a variável e imprimirá a palavra desconhecido por causa do texte ou (||)

console.log(nome || "Desconhecido")




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