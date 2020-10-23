//Nessa caso é preciso ter uma referencia do File System (fs) que é um modulo interno do Node
const fs = require('fs')

//O __dirname é uma constante que esta presente em todos os modulos/Arquivos do Node que representa o diretório atual
const caminho = __dirname + '/Arquivo.json'

//Lendo um arquivo de forma SÍCRONA (CUIDADO! Pois se for um arquivo grande isso travará o event loop do node e a próxima requição ficará esperando que termine esse evento para continuar). Não é recodemdado utilisar a forma sincrono.
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Lendo um arquivo de forma ASÍNCRONA (Não trava o Event Loop)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`\n${config.db.host}:${config.db.port}`)



    /*
    ================================================================
    =---------------------- FINALIZAR CONSOLE ---------------------=
    ================================================================
    */
    const Console = require('../../app')
    Console.Finalizar()
})

//No caso de um arquivo JSON não seria necessário importar a referencia do File System e nem executar os métodos readFileSync() e readFile() para ler esse arquivo
const config = require('./arquivo.json')
console.log()
console.log(config.db)

//Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('\nConteudo da pasta...')
    console.log(arquivos)
})