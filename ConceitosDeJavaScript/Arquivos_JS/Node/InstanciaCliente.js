const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

//O m�dulo "InstanciaNova" exporta uma fun��o factory, ent�o para invocar a fun��o factory � necess�rio colocar () depois de chamar o m�dulo
const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

//Nesse caso o valor n�o muda pois foi apenas exportado um objeto no node e ele faz cache desse objeto, e se esse objeto ja tiver sido criado ele sempre retornara a mesma instancia desse objeto
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//Nesse caso o valor muda pois s�o criadas novas instancias apartir de uma factory
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)



/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()