const [a] = [10]

console.log(a)

const [ n1, ,n3, ,n5, n6=0] = [10, 7, 9, 8] //Aqui como é array para desestruturar ele é utilizado o []
console.log(n1, n3, n5, n6)




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