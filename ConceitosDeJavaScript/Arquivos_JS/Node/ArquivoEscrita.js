const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//Gerar um arquivo apartir do método .writeFile com o conteúdo de um objeto transformando ele no formato JSON:
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || '\nArquivo salvo!')



    /*
    ================================================================
    =---------------------- FINALIZAR CONSOLE ---------------------=
    ================================================================
    */
    const Console = require('../../app')
    Console.Finalizar()
})
