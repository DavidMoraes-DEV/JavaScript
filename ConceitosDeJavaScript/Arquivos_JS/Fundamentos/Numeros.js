const peso1 = 1.0 //Modelo padrão de atribuir valores a constantes e variáveis

const peso2 = Number('2.5') //Outra forma de atribuir valores numéricos a variáveis e costantes.

console.log("Conteúdo da const (peso1 = 1.0):" + peso1)
console.log("Seu tipo é: " + typeof peso1)
console.log("Seu valor é do tipo inteiro? " + Number.isInteger(peso1)) //Obs. Diferentemente de outras linguagem de tipagem forte no JavaScript mesmo a constante ou variável possuir um ponto flutuando, seu valor será considerado como inteiro se após o ponto for o valor 0.

console.log("\nConteúdo da const (peso2 = 2.5):" + peso2)
console.log("Seu tipo é: " + typeof peso2)
console.log("Seu valor é do tipo inteiro? " + Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("\nAvaliação1 = 9.871 e Avaliação2 = 6.871")

console.log("\nTotal: " + total)
console.log("Média completa: " + media)
console.log("Média com 2 casas decimais: " + media.toFixed(2)) // .toFixed() é utilizada para delimitar a quantidade de casas decimais que queremos entre ()




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
