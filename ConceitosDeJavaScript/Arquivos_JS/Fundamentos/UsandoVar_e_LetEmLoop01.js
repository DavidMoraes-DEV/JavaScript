for (var i=0; i<10; i++){
    console.log(i)
}

console.log("i = " + i) //Como i é uma variável do tipo var ela é visível globalmente
console.log("\n\n")

for (let j=0; j<10; j++){
    console.log(j)
}

//console.log("j =" + j) Como j é uma variável do tipo let ela não é visível globalmente então nesse caso daria erro ao tentar acessar ela




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()