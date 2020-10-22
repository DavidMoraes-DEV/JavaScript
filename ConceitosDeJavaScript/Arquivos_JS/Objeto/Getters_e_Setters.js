const sequencia = {
    _valor: 1, // Convenção. Mostra para outros desenvolvedores que essa variável e pretendida ter acesso apenas internamente dentro do objeto sequencia
    get valor() {return this._valor++ }, //Em js os Getters e setters são funções que dentro delas os valores são acessados
    set valor(valor) { //JS não suporta sobrecargas
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 //Se tentar atribuir um valor menor que o que esta atualmente pelo método get/set ele ignorará a tentativa e manterá o valor maior
console.log(sequencia.valor, sequencia.valor)





/*
==================================================================
==---------------------- FINALIZAR CONSOLE ---------------------==
==================================================================
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