//Em outras linguagem o código é lido de cima para baixo de forma sequencial porem em js não é feito 100% dessa forma
//CURIOSIDADE:
//Hoisting: É um comportamento padrão de mover a declaração da variável de tipo var para o topo.

console.log("a =" + a) //Em js variáveis do tipo var são "jagadas para cima ou também chamado de Hoisting" (Sua declaração apenas(Ex: var a) e não o valor atribuído se tiver(Ex: a = 2)) quando o código é executado então é possível chamar uma variável mesmo que sua linha de declaração esteja antes ou depois dessa linha de código, porém se chamar a variável que foi declarada depois dessa linha seu conteúdo será do tipo undefined
var a = 2

console.log("a =" + a)

/*Erro com let
console.log("b = " + b) //Ja com variáveis do tipo let o Hoisting não ocorre
let b = 2
console.log("b = " + b)
*/




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
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