// pessoa -> 123 -> {...}
const pessoa = {nome: "Joao"}
pessoa.nome = "Pedro"

console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: "Ana"} => Erro

Object.freeze(pessoa) //A função .freeze congela a variável não permitindo mais que seu conteúdo seja alterado

pessoa.nome = "Maria" //Se mesmo assim tentar autera-lo o programa simplesmente ignorará essa tentativa de alteração e mantera o conteúdo que já tinha

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: "Joao" }) //Também é possível criar uma constante com um objeto e já congela-los imediatamente impedindo que seja possível realizar qualquer alteração nesse objeto




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()