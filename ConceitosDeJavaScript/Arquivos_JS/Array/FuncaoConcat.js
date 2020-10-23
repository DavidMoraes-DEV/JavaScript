const filhas = ['Maria', 'Joana']

console.log('\nArray das filhas:')
console.log(filhas)

const filhos = ['Joao', 'Pedro']

console.log('\nArray dos filhos:')
console.log(filhos)

//Função .concat é utilizada para concatenar dois ou mais arrays em um novo array
const todos = filhas.concat(filhos)

console.log('\nNovo array com Todos:')
console.log(todos)




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