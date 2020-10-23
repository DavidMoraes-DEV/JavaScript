console.log(typeof Object) //Mostra o tipo que é o Object
console.log(typeof new Object) //Mostra o tipo que foi instanciado essa função

const Cliente = function(){} //Constante recebe uma função
console.log(typeof Cliente) //Atualmente é do tipo função
console.log(typeof new Cliente) //Como foi instanciado agora é do tipo objeto

class Produto{} //Classe é uma função
console.log(typeof Produto) //Como foi instanciado um novo Produto agora é do tipo objeto




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()