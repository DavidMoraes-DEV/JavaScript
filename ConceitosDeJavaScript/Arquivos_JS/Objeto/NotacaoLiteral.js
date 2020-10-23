const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //Cria um objeto com o nome de "a" pegando o valor da variável "a" declarada anteriormente
const obj2 = {a, b, c} //É possível também apenas declarar apenas uma vez que automaticamente ela assumirá o nome da constante anterior e pegará seu conteúdo

console.log(obj1, obj2) //Dará o mesmo resultado

const nomeAttr = "nota"
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },

    funcao2() { //Forma nova e reduzida de declarar uma função dentro de um objeto em JS
        //...
    }
}

console.log(obj5)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()