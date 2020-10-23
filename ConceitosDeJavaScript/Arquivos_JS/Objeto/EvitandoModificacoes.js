//Object.preventExtensions - Evita que o objeto seja extendido, ou seja, não será possível adicionar novos atributos, podendo apenas excluir atributos existentes
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: "1.99", tag: "Promocao"
})

console.log(produto)
console.log()
console.log("Extensivel:", Object.isExtensible(produto)) //A Função .isExtensible tenta se o objeto em questão pode ser extendido

produto.nome = "Borracha" //Alterar os valores de atributos existentes é possível
produto.descricao = "Borracha escolar branca" //Criar um novo atributo nesse caso não é possível
delete produto.tag //Deletar um atributo existente é possível

console.log()
console.log(produto)

//Object.seal - Sela um objeto. Evita que o objeto possa ser extendido e deletado. Podendo apenas alterar os valores dos atributos existentes
const pessoa = { nome: "Juliana", idade: 35}
Object.seal(pessoa)

console.log()
console.log(pessoa)

console.log()
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.idade = 29 //Nesse caso é possível alterar o valor do atributo idade
pessoa.sobrenome = "Moraes" //Não é possível criar um atributo "Sobrenome" pois o objeto esta selado
delete pessoa.nome //E no caso de um objeto selado não é possível excluir um atributo existente

console.log()
console.log(pessoa)

//Object.freeze = selado + valores constantes. Não é possível alterar os valores dos atributos, nem criar novos atributos e nem excluir atributos existentes
const carro = {nome: "Civic", modelo: "A", ano: 2020}

console.log()
console.log(carro)

Object.freeze(carro)

console.log()
console.log("Congelado: " + Object.isFrozen(carro))

carro.name = "Gol" //Não é possível alterar
carro.fabricante = "Volks" //Não é possível criar um novo atributo
delete carro.modelo //Não é possível deletar um atributo existente

console.log()
console.log(carro)




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()