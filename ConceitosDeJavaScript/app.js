/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
module.exports = {
    Finalizar() {
        let readline = require('readline');

        let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        leitor.question("\n\nPress Enter to Exit...", function (answer) {
            leitor.close();
        });
    },

    Loading() {
        let readline = require('readline');

        let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        leitor.question("\n\nLoading, Please wait...\n", function (answer) {
            leitor.close();
        });
    }
}