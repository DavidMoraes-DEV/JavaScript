console.log()

const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna o caracter que esta na posição do indice especificado entre (), lembrando que a primeira posição da string começa no 0

console.log(escola.charAt(5)) //Se a posição não existir irá retornar um valor vazio

console.log(escola.charCodeAt(3)) //Mostra o código do caracter da tabela UniCode

console.log(escola.indexOf('d')) //retorna o valor do indice que esta o caracter especificado

console.log(escola.substring(1)) //retorna o restante da string apartir do indice especificado

console.log(escola.substring(0 ,3)) //retorna a string que esta do primeira indice especificado até o segundo indice especificado sem inclui-lo

console.log('Escola '.concat(escola).concat("!")) //função de concatenar os elementos

console.log(escola.replace(3, 'e')) //substitui o caracter do indice especificado pelo outro caracter especificado

console.log('Ana,Maria,Pedro'.split(',')) //Separa os elementos a partir do caracter especificado e gera um array desses elementos




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()