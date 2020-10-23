//A Notação ponto (.) é utilizada para acessar funções dentro de um escopo definido anteriormente como nos exemplos abaixo:

console.log(Math.ceil(6.1)) //.ceil arredonda para cima o valor especificado

const obj1 = {}

obj1.nome = "Bola"
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")

console.log(obj2)
console.log(obj3)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()