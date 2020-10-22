const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

console.log("\nArray original:")
console.log(carrinho)

//Retornar um array apenas com os preços
//Alternativa 1:
const resultado1 = carrinho.map(function (e) {
    const carrinho = JSON.parse(e)
    return carrinho.preco
})

console.log("\nNovo array apenas com os preços (Alternativa 1):")
console.log(resultado1)

//Alternativa 2:
const paraObjeto = e => JSON.parse(e)
const apenasPreco = e => e.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)

console.log("\nNovo array apenas com os preços (Alternativa 2):")
console.log(resultado2)




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