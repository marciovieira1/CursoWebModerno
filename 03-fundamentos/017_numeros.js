const peso1 = 1.0 // cria uma constante. Não é necessário determinar o tipo da constante. 
const peso2 = Number('2.0') 

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //valida se o que contém na constante é um número inteiro

const avaliacao1 = 9.874
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2)) // exibe a média com duas casas decimais
console.log(media.toString(2)) //transforma a média em um número binário
console.log(typeof media)
