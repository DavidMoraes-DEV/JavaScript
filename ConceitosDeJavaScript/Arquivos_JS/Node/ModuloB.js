//Apenas o que for exportado será visível fora do modulo de origem
let a = 100 //Essa variável não foi exportada então não será visível forá do módulo

//Forma mais classica de exportar modulos:
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa Noite'
    }
}