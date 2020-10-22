const nome = 'Rebeca'
const concatenacao = "\nOlá " + nome + '!' //Forma padrão de se concatenar strings com constantes ou variáveis
const template = `Tchau ${nome}!\n` //Outra forma de concatenar strings com constantes ou variáveis com a interpolação

console.log(concatenacao + "\n")
console.log(template)

//Expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //Função de converter para letra maiuscula

console.log(`Ei... ${up('cuidado')}!`)




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