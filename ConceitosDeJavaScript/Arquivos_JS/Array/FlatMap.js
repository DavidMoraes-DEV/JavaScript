const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)

console.log('\nResultado sem o FlatMap:')
console.log(notas1)

//Implementando o FlatMap no prototype de Array. Sendo o FlatMap utilizado para consigir que seja gerada um array com todos os dados em uma única estrutura, evitando o resultado anterior que os dados ficou em um array de array.
Array.prototype.flatMap = function (callbak) {
    return Array.prototype.concat.apply([], this.map(callbak))
}

const notas2 = escola.flatMap(getNotaDaTurma)

console.log('\nResultado com o FlatMap:')
console.log(notas2)



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