const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

console.log('\nElementos atuais do array:')
console.log(pilotos)

pilotos.pop() //A função .pop remove o ultimo elemento do array

console.log('\nElementos atuais do array:')
console.log(pilotos)

pilotos.push('Verstappen') //A função .push Adiciona um elementos

console.log('\nElementos atuais do array:')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array

console.log('\nElementos atuais do array:')
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elementos na primeira posição do array

console.log('\nElementos atuais do array:')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') //pode adicionar ou remover elementos do array inclusive ao mesmo tempo, nesse exemplo apenas adicionou dois elementos novos dentro do array apartir do indice 2

console.log('\nElementos atuais do array:')
console.log(pilotos)

pilotos.splice(3, 1) //Revome o elemento do indice 3

console.log('\nElementos atuais do array:')
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //A função .slice pega uma parte do array existente apartir do indice definido e retorna um novo array

console.log('\nNovo array 01:')
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Nesse caso ele irá pegar os elementos apartir do indice 1 incluido o elemento desse indice até o indice 4 sem pegar o elementos do indice 4

console.log('\nNovo array 02:')
console.log(algunsPilotos2)




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