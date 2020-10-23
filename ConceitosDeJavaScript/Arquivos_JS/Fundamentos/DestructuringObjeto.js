//Novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade } = pessoa //Nesse contexto as {} representa o operador de destruturação (destructuring) e diz o seguinte: Tire de dentro do objeto "pessoa" as atribuições "nome e idade"
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, altura = true} = pessoa //Nesse caso se não existir a atribuição altura dentro do objeto pessoa será retornado o valor true como padrão e no caso de sobrenome como não foi definido um valor padrão será retornado o tipo undefined

console.log(sobrenome, altura)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()