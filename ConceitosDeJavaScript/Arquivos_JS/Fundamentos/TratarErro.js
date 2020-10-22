function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'

    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }

}

const obj = { name: 'Roberto' }

imprimirNomeGritado(obj)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
let readline = require('readline');
let resp = "";

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("\n\nPress Enter to Exit...", function (answer) {
    leitor.close();
});