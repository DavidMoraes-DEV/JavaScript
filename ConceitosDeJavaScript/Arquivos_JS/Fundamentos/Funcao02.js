// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b)=> {
    return a+b
}

console.log(soma(10, 5))

//Retorno implícito
const subtracao = (a, b) => a-b //Desse modo o código fica muito mais elegível e objetivo

console.log(subtracao(10, 9))

const quadrado = a => a*a

console.log(quadrado(10))

const imprimir = a => console.log(a)

imprimir('Hello Word!!!')




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