const pessoa = {
    nome: 'Marcio',
    sobrenome: 'Vieira',
    idade: 42,
    peso: 73
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}