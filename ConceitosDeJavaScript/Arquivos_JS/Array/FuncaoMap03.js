//Implementando meu próprio Map para entender como é o funcionamento interno do Map
Array.prototype.MeuMap = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

console.log("\nArray original:")
console.log(carrinho)

//Retornar um array apenas com os preços
const paraObjeto = e => JSON.parse(e)
const apenasPreco = e => e.preco

const resultado = carrinho.MeuMap(paraObjeto).MeuMap(apenasPreco)

console.log("\nNovo array apenas com os preços:")
console.log(resultado)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()