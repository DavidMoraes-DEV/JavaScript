//middleware pattern (chain of responsibility)
//Exemplo b�sico para mostrar a implementa��o do padr�o Middleware

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}

//Com o uso desse padr�o consigo trocar a ordem dos passos facilmente sem necessitar mecher dentro das fun��es, mudando apenas a forma de declarar a ordem dos passos.
exec(contexto, passo1, passo2, passo3)
console.log(contexto)

//Note que se a fun��o n�o tiver o m�todo next no final dela, n�o ser� chamada a pr�xima fun��o e terminar� ali mesmo tendo colocado outros passos ap�s ela nesse caso n�o ser� executado.
exec(contexto, passo3, passo1, passo2)
console.log(contexto)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()