//Exportando uma funcao que recebe parametros variados (...nomes) e retorna uma frase para cada um desses parametros
module.exports = function (...nomes) {
    return nomes.map(nome => `Boa Semana ${nome}!`)
}