let valor //não inicializada

console.log(valor) //retorna o valor undefined pois não possui nenhum dado declarado, pois ela foi apenas criada mas não foi inicializada.

valor = null 

console.log(valor) //Null significa nulo, ou seja, ausência de valor

// console.log(valor.toString()) Obs. Se tentar acessar uma variável que esta nula dará erro do tipo: TypeError

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null //Sem preço

console.log(produto)
console.log(!!produto.preco)




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