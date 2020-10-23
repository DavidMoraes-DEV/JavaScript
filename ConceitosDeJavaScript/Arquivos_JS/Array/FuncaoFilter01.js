//A função .filter filtra os elementos do array conforme a condição definida, retornando um novo array

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Cadeira Gamer', preco: 1000.99, fragil: false },
    { nome: 'Mouse', preco: 50.00, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
    { nome: 'Cadeira', preco: 150.50, fragil: false },
    { nome: 'Prato de Vidro', preco: 25.00, fragil: true },
    { nome: 'Mesa', preco: 550.00, fragil: false }
]

console.log("Array original:")
console.log(produtos)

console.log("\nNovo array somente com produtos frageis:")
console.log(produtos.filter(function (p) {
    return p.fragil == true
}))

console.log("\nNovo array sem produtos frageis:")
console.log(produtos.filter(function (p) {
    return p.fragil == false
}))

console.log("\nNovo array de produtos com preco menor que R$ 100,00")
console.log(produtos.filter(function (p) {
    return p.preco < 100.0
}))

console.log("\nNovo array de produtos com preco maior que R$ 100,00")
console.log(produtos.filter(function (p) {
    return p.preco > 100.0
}))

const produtoCaro = function (p) { return p.preco > 500.0 }
const produtoCaroFragil = function (p) { return p.fragil == true }

console.log("\nNovo array de produtos com preço maior que R$ 500,00 e que sao frageis:")
console.log(produtos.filter(produtoCaro).filter(produtoCaroFragil))




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()