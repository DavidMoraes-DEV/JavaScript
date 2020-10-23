//Junto do Node vem o "npm"(Gerenciador de pacotes do node)
//O npm � respons�vel por baixar uma determinada biblioteca de terceiros como por exemplo o jQuery, React, Angular etc...
//Nesse caso instalaremos o lodash, atrav�s do c�digo: npm i lodash diretamente no terminal

//Importando os m�dulos de terceiros (LoDash)
const _ = require('lodash')

setInterval(() => console.log(_.random(1, 1000)), 2000) //Afun��o .random pertence a biblioteca LoDash