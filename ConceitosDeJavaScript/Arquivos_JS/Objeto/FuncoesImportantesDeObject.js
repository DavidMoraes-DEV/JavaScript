/**
 * FUNÇÕES APRESENTADAS AQUI:
 * .keys            => A função .keys pega o nome de todas as chaves dentro do objeto especificado e não o valor que tem dentro dessas chaves
 * .values          => A função .values pega apenas os valores das chaves dentro do objeto
 * .entries         => A função .entries retorna em forma de array uma lista com todos os valores e chaves dentro do objeto
 * .defineProperty  => A função .defineProperties define uma propriedade para o objeto em questão
 * .assign          => A função .assign concatena todos os atributos dos objetos dentro do primeiro objeto especificado "dest" e se já existir um atributo com o mesmo nome dentro dele será sobrescrito pelo que será concatenado a ele. Object.assign (ECMAScript 2015) Concatena os atributos dos objetos
 * .freeze          => A função .freeze congela o objeto para alterações
 */

const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) 

console.log(Object.values(pessoa)) 

console.log(Object.entries(pessoa)) 
console.log()

Object.entries(pessoa).forEach(e => { //Percorre todos os elementos desse array criado com as chaves e valores
    console.log(`${e[0]}: ${e[1]}`)
});

console.log()
Object.entries(pessoa).forEach(([chave, valor]) => { //Utilizando o Destructuring para percorre todos os elementos desse array criado com as chaves e valores
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, //Definido como true para que ela seja enumerada quando chamar a função .keys, se colocar o valor "false" ela não irá aparecer quando a função .keys chamar todas as chaves do objeto
    writable: false,
    value: "01/01/2019" //Se definir um valor para a chave "value:" dentro do defineProperty ela será congelada e não aceitará alterações posteriores
}) 

pessoa.dataNascimento = "01/01/2017" //Uma atributo criado com o defineProperty não aceita ser sobrescrita
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) 

console.log(obj)

Object.freeze(obj)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()