//Cadeia de protótipos (prototype chain)
Object.prototype.attr3 = "Z" //O Object.prototype é o maior protótipo possível que engloba toda a cadeia de protótipos
const avo = {attr1: "A" } //A constante avo tem como protótipo o Object.prototype
const pai = { __proto__: avo, attr2: "B" } //A constante pai tem como protótipo(herança) o avo
const filho = { __proto__: pai, attr2: "C"} //A constante filho tem como protótipo o pai

console.log(filho.attr1) //Aqui a constante filho não possui o attr1 então a procura passará para seu protótipo pai que também não tem o attr1 então será procurado no protótipo do pai que é o avo aí sim será encontrato o attr1.
console.log(filho.attr0) //Se colocar para buscar um atributo que não existe na cadeia de protótipos será retornado o valor undefined
console.log(filho.attr3) //Buscará en toda a cadeia de protótipos definido e se não achar irá buscar no protótipo Object.prototype

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //shadowing. Irá sombrear o atributo original do objeto "carro"
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}` //O método .super é utilizado para referênciar um método que esta contido dentro do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) //A função .getPrototypeOf estabelece uma relação de protótipo entre o primeiro objeto citado com o segundom sendo esse o protótipo da relação criada. Então nessa caso específico "ferrari" terá como protótipo o "carro"
Object.setPrototypeOf(volvo, carro)

console.log()

console.log(ferrari)
console.log(volvo)

console.log()
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()