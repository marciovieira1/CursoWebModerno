function criarProduto(nome, preco, desconto =0.1){
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto("Computador",3200.25 ))
