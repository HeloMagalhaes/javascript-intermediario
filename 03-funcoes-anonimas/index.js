// function somar(numero1, numero2){
//     return numero1 + numero2
// }
// let resultadoDaSoma = somar(12,5)
// console.log(resultadoDaSoma)

// normalmente eu faria assim

let resultadoDaSoma = function(numero1, numero2){
    return numero1 + numero2
}
console.log(resultadoDaSoma)

// minha variavel ta recebendo uma função, mas ela é uma função anonima porque não tem um nome, só estou usando a palavra function e já estou passando o valor.
// se eu quisesse realmente somar eu teria console.log(resultadoDaSoma(12,5)) , porque ela é uma função então abri parênteses para chamá-la.
