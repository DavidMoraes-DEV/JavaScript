//Nessa caso � preciso ter uma referencia do File System (fs) que � um modulo interno do Node
const fs = require('fs')

//O __dirname � uma constante que esta presente em todos os modulos/Arquivos do Node que representa o diret�rio atual
const caminho = __dirname + '/Arquivo.json'

//Lendo um arquivo de forma S�CRONA (CUIDADO! Pois se for um arquivo grande isso travar� o event loop do node e a pr�xima requi��o ficar� esperando que termine esse evento para continuar). N�o � recodemdado utilisar a forma sincrono.
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Lendo um arquivo de forma AS�NCRONA (N�o trava o Event Loop)
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

//No caso de um arquivo JSON n�o seria necess�rio importar a referencia do File System e nem executar os m�todos readFileSync() e readFile() para ler esse arquivo
const config = require('./arquivo.json')
console.log()
console.log(config.db)

//Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('\nConteudo da pasta...')
    console.log(arquivos)
})