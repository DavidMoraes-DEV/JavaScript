{
    {
        {
            {
                var mensagem = "Sera?\n"
                console.log(mensagem) //Em outras linguagens a variável mensagem seria visivel apenas dentro do escopo em que ela foi declarada
            }
        }
    }
}

console.log(mensagem) //Mas no caso da linguagem js a variáveç do tipo var ficará visivel em todo o programa mesmo que for forá do escopo ao qual ela foi declarada

function teste(){
    var local = 123
    console.log(local) //No caso de uma variável declarada dentro de uma função qualquer, essa variável será acessada apenas dentro do escopo da função
}

teste()
//console.log(local) Fora do escopo da função será gerado um erro do tipo: ReferenceError




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()