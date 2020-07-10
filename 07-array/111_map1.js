const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(num => num * 2)
console.log(resultado)

const soma10 = num => num + 10
const triplo = num => num * 3
const paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).toString().replace(".",",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(nums.map(soma10))
console.log(nums.map(triplo))
console.log(nums.map(paraDinheiro))
console.log(resultado)
