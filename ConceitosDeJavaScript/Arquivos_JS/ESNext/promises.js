//Promises � uma estrutura que tem por objetivo representar uma opera��o ass�ncrona e trabalha com o conceito de promessa, que pode ser atendido ou rejeitado dependendo da situa��o 
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, '\n\nQue legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //A fun��o .catch � poss�vel tratar erros que podem surgir nas promoses




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()