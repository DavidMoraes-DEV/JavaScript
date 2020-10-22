//Função Construtora
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem Vindo", 123)
const aula2 = new Aula("Até Breve", 456)
console.log(aula1, aula2)

//Simulando o operador "new":
function novo(f, ...params) //Esse operador (...) irá receber um conjunto de parametros e ele irá concatenar tudo isso em um array
{
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) //Nesse caso internamente dentro da funçãp params é um array por conta do operador utilizado anteriormente (...)
    return obj
}

const aula3 = novo(Aula, "Bem Vindo", 789) //O resultado será exatamente o mesmo de utilizar o operador new, porém nesse caso esta utilizando uma função que faz o papel do new, mostrando assim em suas linhas de código o que acontece em segundo plano quando chamamos o operador "new"
const aula4 = novo(Aula, "Até Breve", 101112)
console.log(aula3, aula4)





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