// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //Não será adicionado novamente

console.log(times)
console.log(times.size) //.size para ver tamanho
console.log(times.has('vasco')) //Leva em consideração letra maiuscula e minuscula
console.log(times.has('Vasco'))
times.delete('Flamengo') //Exclui um elemento do set
console.log(times.has('Flamengo'))

//Outra forma de criar um set:
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()