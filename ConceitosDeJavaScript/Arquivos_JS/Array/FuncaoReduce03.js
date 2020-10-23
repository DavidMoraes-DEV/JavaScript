//Implementando minha própria função Reduce para intender como a função reduce original funciona internamente
Array.prototype.MeuReduce = function (callbak) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callbak(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(`\nArray atual:`)
console.log(nums)

console.log(`\nSoma dos elementos do array: ${nums.MeuReduce(soma)}`)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()