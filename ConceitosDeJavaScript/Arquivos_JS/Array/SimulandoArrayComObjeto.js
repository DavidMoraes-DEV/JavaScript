const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" } //Simulando um array com objeto

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia'] //Array

console.log(quaseArray.toString(), meuArray)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()