//Array em JS é um objeto
console.log("\n", typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

console.log('\nElementos atuais do Array:')
console.log(aprovados)

aprovados[3] = 'Paulo' //Forma possível de adicionar um elemento dentro do array
aprovados.push('Abia') //Outra forma de adicionar um elemento dentro do array

console.log(`\nTamanho atual do Array: ${aprovados.length}`) //A função .length mostra o tamanho atual do array

console.log(`\nA posicao 8 do Array esta undefined: ${aprovados[8] === undefined}`)

console.log('\nElementos atuais do Array:')
console.log(aprovados)

aprovados.sort() //Essa função ordena os elementos dentro do Array de forma alfabética

console.log('\nNovo array ordenado de forma alfabetica:')
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //A função splice consegue adicionar um elemento em um determinado indice, como também remove um elemento de um indice. Podendo ainda remover e adicionar um elemento ao mesmo tempo. No caso do exemplo foi definido para remover dois elementos começando apartir do elemento de indice 1 e depois irá adicionar os outros dois elementos definidos depois

console.log('\nArray com os dois elementos removidos pelo splice: ')
console.log(aprovados)

delete aprovados[1]

console.log('\nElementos atuais do Array depois do delete:')
console.log(aprovados)





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