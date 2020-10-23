const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    //DESAFIO: Obter a mulher chinesa com o menor sal�rio:

    //Alternativa 01:
    const apenasMulher = function(f) {
        if (f.genero == 'F') {
            return f.genero
        }
    }

    const apenasChina = function(f) {
        if (f.pais == 'China') {
            return f.pais
        }
    }

    const menorSalario = function (salario1, salario2) {
        if (salario2.salario < salario1.salario) {
            salario1 = salario2
        }
        return salario1
    }

    const mulherChinesaComMenorSalario = funcionarios.filter(apenasMulher).filter(apenasChina).reduce(menorSalario)

    console.log('Alternatia 01: A mulher chinesa que possui o menor salario e:')
    console.log(mulherChinesaComMenorSalario)

    //Alternativa 02:
    const mulherChinesaComMenorSalario2 = funcionarios.filter(function (f) {
        if (f.genero == 'F') {
            return f.genero
        }
    }).filter(function (f) {
        if (f.pais == 'China') {
            return f.pais
        }
    }).reduce(function (salario1, salario2) {
        if (salario2.salario < salario1.salario) {
            salario1 = salario2
        }
        return salario1
    })

    console.log('\nAlternativa 02: A mulher chinesa que possui o menor salario e:')
    console.log(mulherChinesaComMenorSalario2)

    //Alternativa 03:
    console.log('\nAlternativa 03: A mulher chinesa que possui o menor salario e:')

    console.log(funcionarios.filter(function (f) {
        if (f.genero == 'F') {
            return f.genero
        }
    }).filter(function (f) {
        if (f.pais == 'China') {
            return f.pais
        }
    }).reduce(function (salario1, salario2) {
        if (salario2.salario < salario1.salario) {
            salario1 = salario2
        }
        return salario1
    }))

    //Alternativa 04: (Exemplo mais declarativo)
    console.log('\nAlternativa 04: A mulher chinesa que possui o menor salario e:')

    console.log(funcionarios
        .filter(f => f.genero === 'F')
        .filter(f => f.pais === 'China')
        .reduce(function (salario1, salario2) { return salario1.salario < salario2.salario ? salario1 : salario2 }))




    /*
    ================================================================
    =---------------------- FINALIZAR CONSOLE ---------------------=
    ================================================================
    */

    const Console = require('../../../app')
    Console.Finalizar()
})