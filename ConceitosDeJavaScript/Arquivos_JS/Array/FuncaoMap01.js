//A função Map é utilizada para fazer uma transformação dentro de um array, retornando um novo array

const nums = [1, 2, 3, 4, 5]

console.log('\nArray original:')
console.log(nums)

//O map é um For com propósito
let resultado = nums.map(function (e) {
    return e * 2 //Nesse caso utilizamos o map para percorrer cada elemento de um array e multiplica-lo por 2 para obter um novo array com os elementos transformados
})

console.log('\nNovo array transformado:')
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

//Chamando o map de forma encadeada utilizando 3 funções arrow armazenadas dentro de constantes
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log('\nArray transformado 3 vezes (soma10, triplo, paraDinheiro):')
console.log(resultado)



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