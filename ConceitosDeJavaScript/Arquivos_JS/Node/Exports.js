console.log(module.exports === this)
console.log(module.exports === exports)

//Formas diferentes de exportar algo para fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

//Mesmo mudando a refer�ncia de exports duas vezes ele continuar� apontando para module.exports
exports = {
	nome: 'Teste'
}

console.log(module.exports)

//Maneira correta de exportar um objeto:
module.exports = { publico: true }

console.log(module.exports)



/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()