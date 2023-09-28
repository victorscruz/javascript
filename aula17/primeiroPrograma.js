const listaDestinos = new Array(
    `Rio de Janeiro`, `Salvador`, `Fortaleza`
)
listaDestinos.push('Curitiba') //Adicionar
console.log('Possíveis Destinos')



listaDestinos.splice(0, 1); //Remover um valor do Array (indice, quantidade)

console.log(listaDestinos[1]) //Apresentar um índice em específico

console.log(listaDestinos.indexOf('Curitiba')) //Saber qual o índice pelo nome de um array
