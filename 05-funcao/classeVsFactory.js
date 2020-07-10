//método 1. Utilizando classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Márcio')
p1.falar()

//método 2. Utilizando função.

const criarPessoa = nome => {
    return {
        falar: () =>  console.log(`Meu nome é ${nome}`)    
    }
}

const p2 = criarPessoa('João')
p2.falar()