const listaDestinos = new Array(
    `Rio de Janeiro`, `Salvador`, `Fortaleza`
)

const idadeComprador = 16
const comAcompanhante = true

// if(idadeComprador >= 18){
//     console.log('Possíveis Destinos')
//     console.log(listaDestinos)
// }else if(comAcompanhante){
//     console.log('Comprador acompanhado')
//     console.log('Possíveis Destinos:')
//     console.log(listaDestinos)
// }else{
//     console.log("Idade não permitida")
// }

if(idadeComprador >= 18 || comAcompanhante){ 
    console.log('Possíveis Destinos')
    console.log(listaDestinos)
   
}else{
    console.log("Idade não permitida")
}

//listaDestinos.splice(0, 1); //Remover um valor do Array (indice, quantidade