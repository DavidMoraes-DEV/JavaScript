'use strict';

console.log('Hello world');

/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
function FinalizarConsole() {
    let readline = require('readline');
    let resp = "";

    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question("\n\nPress Enter to Exit...", function (answer) {
        leitor.close();
    });
}