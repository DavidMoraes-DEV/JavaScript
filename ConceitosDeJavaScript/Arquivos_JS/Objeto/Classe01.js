//Em js a classe é convertido em uma função
class Lancamento { 
    constructor(nome = "Generico", valor = 0) //Aqui é definido os parâmetros da função construtora
    {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorCOnsolidado = 0
        this.lancamentos.forEach(l => {
            valorCOnsolidado += l.valor
        })
        return valorCOnsolidado
    }
}

const salario = new Lancamento("Salario", 4500)
const contaDeLuz = new Lancamento("Luz", -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())




/*
================================================================
=---------------------- FINALIZAR CONSOLE ---------------------=
================================================================
*/
const Console = require('../../app')
Console.Finalizar()