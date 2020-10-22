const pai = { nome: "Pedro", corCabelo: "Preto"}

const filha1 = Object.create(pai) //Utilizando a função .create ela irá criar o objeto "filha1" já tendo como protótipo o objeto "pai"
filha1.nome = "Ana"

console.log(filha1.corCabelo) //Nesse caso irá imprimir a cor do cabelo de seu protótipo que é o objeto "pai" pois em "filha1" ainda não foi definido sua "corCabelo", então como não achou em "filha1" passou a procurar em seu protótipo que no caso é o "pai"

//Além de passar o objeto que será o protótipo, pode-se ainda definir atributos e algumas propriedades para o objeto criado
const filha2 = Object.create(pai, {
    nome: { value: "Bia", writable: false, enumerable: true }
})

console.log(filha2.nome)

filha2.nome = "Carla"

console.log()
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log()
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

console.log()
for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`) //A função .hasOwnProperty(key) pega as chaves que existem dentro da propriedade de filha2 
}





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