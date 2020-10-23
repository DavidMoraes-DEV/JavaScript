const funcs1 = []

for (var i = 0; i<10; i++){  //Adiciona um elemento ao array na posição "i"
    funcs1.push(function(){
        console.log(i)
    }) 
}

funcs1[2]() //Como var não possui escopo de função o valor de "i" nesse caso seria 10 para qualquer função, pois foi o último valor que ficou armazenado na estrutura "for"
funcs1[8]()

const funcs2 = []
for (let j = 0; j<10; j++){  //Adiciona um elemento ao array na posição "i"
    funcs2.push(function(){
        console.log(j)
    }) 
}

funcs2[2]() //Como let possui escopo de função o valor de "j" nesse caso sera o valor no qual a variável j estava valendo no momento da criação da posição do array.
funcs2[8]()




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()