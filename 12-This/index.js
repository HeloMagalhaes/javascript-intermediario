// 'use strict'
// //console.log(this)
// console.log(window)
// console.log(window===this)

// this.name = 'Ricardo'
// function saudar (){
//     console.log('this no contexto da funcao', this)
//     console.log('Olá, ' + this.name)
// }
// saudar ()

// let usuario = {
//     nome: 'Ricardo',
//     saudar: function () {
//         console.log('this no contexto do metodo',
//         this)
//         console.log('this.nome no contexto do metodo',
//         this.nome)
//     }
// }

// usuario.saudar()

// let comida = {
//     nome: 'Brócolis',
//     temperatura: 0
// }
comida.cozinhar = function (temperaturaDoCozimento){
    this.temperatura = temperaturaDoCozimento
}
console.log(comida)
comida.cozinhar(100)
console.log (comida)