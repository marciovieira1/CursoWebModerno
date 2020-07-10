const produto = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'Ipad Pro', preco: 4199, fragil: false},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false}
]
console.log(produto.filter(p=> p.preco>=500).filter(p=> p.fragil))
console.log(produto.filter(p=> p.preco>=500 && p.fragil))


console.log(produto.filter(function(p){
    return (p.preco >= 500 && p.fragil)
}))
