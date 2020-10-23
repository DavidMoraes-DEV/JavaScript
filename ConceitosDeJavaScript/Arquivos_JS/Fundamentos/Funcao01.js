// Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3) 
imprimirSoma(2) //Se passar apenas um argumento para uma função que espera dois argumentos em js irá resultar em NaN "Not a Number"
imprimirSoma() //Se não passar nada em um função que esperá argumentos irá também dar NaN
imprimirSoma(2, 10, 4, 5, 6, 7) //Se passar mais parâmetros do que a função necessita em js ela irá pegar apenas os primeiros necessários para a função e o resto ela ignorará

//Função com retorno
function soma(a,b = 1){ //Função que retorna um valor com a variável b contendo um valor padrão = 1
    return a+b
}

console.log(soma(10, 5)) //Se passar um valor como parâmetro para a variável b ela irá substituir o valor padrão pelo valor informado
console.log(soma(2)) //Se não passar um valor para a variável b ela simplismente utilizará o valor padrão definido anteriormente na função




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()