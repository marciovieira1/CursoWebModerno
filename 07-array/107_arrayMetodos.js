const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // exclue o último elemento do array

console.log(pilotos)
pilotos.push('Verstapper')
console.log(pilotos)
pilotos.shift() //excluir o primeiro elemento do array
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice para adicionar a partir de uma posição
pilotos.splice(2, 0,'Bottas', 'Massa')
console.log(pilotos)

// splice para remover a partir de uma posição
pilotos.splice(3, 1)
console.log(pilotos)

//método slice - retorna um novo array
const algunsPilotos = pilotos.slice(2,4) //Seleciona a posição inicial e final
console.log(algunsPilotos)
