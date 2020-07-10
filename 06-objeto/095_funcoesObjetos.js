const pessoa = {
    nome: 'Márcio',
    idade: 42,
    pesos: 75
}

console.log(Object.keys(pessoa)) //Mostra o nome de cada item do objeto
console.log(Object.values(pessoa)) //Mostra o valor de cada item do objeto
console.log(Object.entries(pessoa)) //Mostra o nome e o valor de cada item do objeto

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

//Utilizando o destruturing. Desestruturando os elementos de um array.
//Esse método é mais descritivo e fácil de ler do que o de cima. O resultado é o mesmo.
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

//Object.assign (ES6-ES2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const o3 = { d: 5, c: 2, e: 8 }
Object.assign(dest, o1, o2)
console.log(Object.assign(dest, o1, o2, o3))
console.log(dest)
