let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length
console.log(frutasTamanho)

// for(let i  = 0; i< frutas.length; i++){
//     console.log('Fruta: ' + frutas[i])
// }
// frutas.forEach(function(item, indice, array){
//     console.log('Fruta: ' + frutas[indice])
// }
// )

frutas.forEach(function(item){
    console.log('Fruta: ' + item)
}
)