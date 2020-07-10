const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}.) ${nome}`)
})

let i = 1
aprovados.forEach(nome => console.log(`${i++}.) ${nome}`))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
