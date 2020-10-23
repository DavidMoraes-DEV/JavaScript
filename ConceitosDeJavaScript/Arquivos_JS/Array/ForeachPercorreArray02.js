//Criando uma função forEach dentro do prototype Array
Array.prototype.meuForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log()

//Utilizando a função forEach creada manualmente como um forEach oficial do js
aprovados.meuForEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()