//Aquilo que foi exportado do arquivo moduloA utilizei o require() para importar esse conteudo e guardar dentro da constante modulaA desse arquivo
const moduloA = require('./ModuloA')

const moduloB = require('./ModuloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())



/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()