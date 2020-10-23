//console.log(global)

//CUIDADO!!! ao mecher em objetos compartilhados globalmente
global.MinhaApp = {
    saudacao() {
        return "Hello World"
    },
    nome: 'Sistema'
}