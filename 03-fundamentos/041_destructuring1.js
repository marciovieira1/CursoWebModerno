const pessoa = {
    nome: 'Márcio',
    idade: 42,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 233
    }
}

const{nome, idade} = pessoa
console.log(nome, idade)

const{nome:n, idade:i} = pessoa
console.log(n, i)
