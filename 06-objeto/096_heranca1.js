const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //Informa qual é o protótipo ou objeto PAI do objeto.
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

