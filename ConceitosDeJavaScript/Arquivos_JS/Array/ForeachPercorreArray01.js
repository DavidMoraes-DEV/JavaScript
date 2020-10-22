const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log()

//Essa função .forEach percorre cada elementos do array aplicando os parâmetros especificados entre (). No caso de querer pegar o conteúdo do indice tem que declarar primeiro o conteúdo e depois o indice como no exemplo abaixo. No caso de um forEach é possível ainda declarar um terceiro parâmetro sendo ele o próprio array ficando: (aprovados.forEach(function (nome, indice, array))
aprovados.forEach(function (nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

console.log()

//Utilizando o forEach com a utilização do Arrow function:
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