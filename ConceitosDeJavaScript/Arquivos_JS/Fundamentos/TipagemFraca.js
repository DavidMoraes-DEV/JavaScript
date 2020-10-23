//A linguagem JavaSript possui tipagem Fraca

let teste = 'Legal';

console.log("\nConteúdo atual da variável (teste): " + teste);
console.log("A variável (teste) é do tipo: " + typeof teste); //typeof Mostra qual é o tipo atual da variável (number, string, etc...)

teste = 3.1516

console.log("\nConteúdo atual da variável (teste): " + teste);
console.log("A variável (teste) é do tipo: " + typeof teste);

teste = 'D'

console.log("\nConteúdo atual da variável (teste): " + teste);
console.log("A variável (teste) é do tipo: " + typeof teste);

//Evitar nomes genéricos e siglas que não deixa claro sua principal funcionalidade como por exemplo:
let valor = '' //Valor de que?
let numero = 1 //Número de que?
let pqp = false //Significa: Produto Químico Perigoso. Hammm? KKKK




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()