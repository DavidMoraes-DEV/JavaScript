function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto 
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //Todos os objetos criados apartir de uma função construtora apontará para o mesmo protótipo
console.log(MeuObjeto.prototype === obj1.__proto__) //Quando se cria um objeto apartir de uma função construtora, o protótipo desse objeto automaticamente aponta para a função criada .prototype e não Object.prototype que é quando se cria um objeto apartir do "new Object"

MeuObjeto.prototype.nome = "Anônimo"
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = "Rafael"

obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Nesse caso foi definido para que sua referência de prototipo saida de Objetc.prototype para MeuObjeto.prototype
obj3.nome = "Obj3"
obj3.falar()

//RESUMINDO... (CURIOSIDADES)
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) 
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()