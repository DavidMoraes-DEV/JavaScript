// par nome/valor
const saudacao = "Oi" //contexto léxico 1

function exec() {
    const saudacao = "Tchau" //contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Brasil",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()