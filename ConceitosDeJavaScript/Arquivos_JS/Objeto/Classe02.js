class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//Forma de definir que uma determinada função que foi gerada apartir de uma classe terá como protótipo outra classe função
class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor"){
        super(sobrenome) //Maneira de aproveitar o construtor da classe/função que essa classe atual tem como herança
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super("Silva")
    }
}

const filho = new Filho

console.log(filho)





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