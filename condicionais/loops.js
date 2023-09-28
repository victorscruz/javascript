const listaDestinos = new Array(
    `Rio de Janeiro`, `Salvador`, `Fortaleza`
)

const idadeComprador = 16
const comAcompanhante = true
let temPassagem = false
let destino = 'Curitiba'

console.log('Possíveis Destinos')

const podeComprar = idadeComprador >= 18 || comAcompanhante


let contador = 0
let destinoExiste = false

while(contador <3){
   
    if(listaDestinos[contador] == destino){
        destinoExiste = true
        break
    }
    contador  ++
}
console.log('Destino existe: ', destinoExiste)



// for(let contador = 0; contador<=3; contador ++){
//     console.log('Possíveis Destinos')
//     console.log(listaDestinos[contador])
//     console.log('Boa viagem!')
//     temPassagem = true
// }

