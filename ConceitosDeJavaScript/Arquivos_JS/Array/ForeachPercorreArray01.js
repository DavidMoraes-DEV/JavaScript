const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log()

//Essa fun��o .forEach percorre cada elementos do array aplicando os par�metros especificados entre (). No caso de querer pegar o conte�do do indice tem que declarar primeiro o conte�do e depois o indice como no exemplo abaixo. No caso de um forEach � poss�vel ainda declarar um terceiro par�metro sendo ele o pr�prio array ficando: (aprovados.forEach(function (nome, indice, array))
aprovados.forEach(function (nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

console.log()

//Utilizando o forEach com a utiliza��o do Arrow function:
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

console.log()

//Utilizando o forEach com uma constante que carrega uma Arrow function:
aprovados.forEach(exibirAprovados)




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