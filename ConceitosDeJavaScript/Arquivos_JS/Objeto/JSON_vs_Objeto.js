//JSON é um formato de dados para interoperabilidade entre sistemas, que é ter um formato textual que não carrega consigo nada específico de uma tecnologia, então não entra funções em sua montagem por exemplo.

const obj = {a: 1, b: 2, c: 3, soma() {return a+b+c}}

console.log(JSON.stringify(obj)) // JSON.stringify() converte os dados dao objeto em um formato textual e não inclui nenhum tipo de função

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // JSON.parse() faz o contrário do anterior, ele converte o formato textual JSON para um objeto válido

console.log(JSON.parse('{ "a": 1, "b": 1.5, "c": "string", "d": true, "e": {}, "f": [] }')) //Perceba que valor numérico e booleano não necessita colocar entre aspas duplas, porém se for strings é necessário colocar entre aspas duplas, objetos entre {} e arrays entre []





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