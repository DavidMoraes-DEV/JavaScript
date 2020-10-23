const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) //Em JavaScript não da erro ao tentar acessar uma posição do array que não existe, pois resultará em um retorno "undefined"

valores[4] = 10

console.log("\nElementos do Array atual:")
console.log(valores)

console.log("\nQuantos elementos tem no Array atual: " + valores.length)

valores.push({id: 3}, false, null, 'teste') //A Função .Push Adiciona elementos ao Array

console.log(valores) //Mesmo dando para misturar diferentes tipos de dados é recomendável manter arrays homogêneos.

console.log(valores.pop()) //A Função .pop retira(pega) o último elemento do array

delete valores[0] //Deleta o elemento especificado do Array e a posição desse arra fica vazia

console.log(valores)

console.log(typeof valores)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()