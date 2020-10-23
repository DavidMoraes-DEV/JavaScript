const alunos = [
    { nome: 'Joao', nota: 5, bolsista: false },
    { nome: 'Maria', nota: 10, bolsista: true },
    { nome: 'Pedro', nota: 6, bolsista: false },
    { nome: 'Ana', nota: 8, bolsista: true }
]

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()