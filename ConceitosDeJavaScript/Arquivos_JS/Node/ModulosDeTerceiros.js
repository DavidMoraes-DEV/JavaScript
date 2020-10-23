//Junto do Node vem o "npm"(Gerenciador de pacotes do node)
//O npm é responsável por baixar uma determinada biblioteca de terceiros como por exemplo o jQuery, React, Angular etc...
//Nesse caso instalaremos o lodash, através do código: npm i lodash diretamente no terminal

//Importando os módulos de terceiros (LoDash)
const _ = require('lodash')

setInterval(() => console.log(_.random(1, 1000)), 2000) //Afunção .random pertence a biblioteca LoDash