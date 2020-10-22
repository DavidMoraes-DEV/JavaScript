const alunos = [
    { nome: 'Joao', nota: 5, bolsista: false },
    { nome: 'Maria', nota: 10, bolsista: true },
    { nome: 'Pedro', nota: 6, bolsista: false },
    { nome: 'Ana', nota: 8, bolsista: true }
]

console.log(alunos.map(a => a.nota))

console.log()

//Desaio 01: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(`\nTodos os alunos sao bolsistas? ${alunos.map(a => a.bolsista).reduce(todosBolsistas)}`)

//Desafio 02: Algum aluno é bolsista?
const alunoBolsista = (resultado, bolsista) => resultado || bolsista

console.log(`\nExiste algum aluno bolsista? ${alunos.map(a => a.bolsista).reduce(alunoBolsista)}`)




/*
==================================================================
==---------------------- FINALIZAR CONSOLE ---------------------==
==================================================================
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