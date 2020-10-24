//Promises é uma estrutura que tem por objetivo representar uma operação assíncrona e trabalha com o conceito de promessa, que pode ser atendido ou rejeitado dependendo da situação 
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
    .catch(e => console.log(e)) //A função .catch é possível tratar erros que podem surgir nas promoses




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()