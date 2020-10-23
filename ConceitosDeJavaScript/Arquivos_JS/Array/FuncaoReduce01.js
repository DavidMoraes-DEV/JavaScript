const alunos = [
    { nome: 'Joao', nota: 5, bolsista: false },
    { nome: 'Maria', nota: 10, bolsista: true },
    { nome: 'Pedro', nota: 6, bolsista: false },
    { nome: 'Ana', nota: 8, bolsista: true }
]

console.log(alunos.map(a => a.nota))

console.log()

//A função .reduce pega o primeira elemento e acumula com o segundo elemento, depois pega o resultado e acumula com o próximo elemento e assim por diante, conforme exemplo:
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()