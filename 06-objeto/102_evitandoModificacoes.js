//Object.preventExtensions
/*
    Permite alterar os valores do objeto e excluir elementos do objeto. Mas não permite
    criar novos atributos para o objeto
*/

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 2.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) //função que testa se objeto é extensível

produto.nome='Borracha' //Alterou o valor
produto.descricao = 'Borracha escolar' //Não permite incluir novos atributos para o objeto
delete produto.tag //Permite excluir atributo
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) //Sela o objeto pessoa. Permite alterar os valores, mas não permite alterar os atributos.
console.log('Selado: ', Object.isSealed(pessoa)) //função que testa se o objeto foi selado

pessoa.sobrenome = 'Silva' //Não permite a inclusão
delete pessoa.nome //Não permite a exclusão de atributos
pessoa.idade = 29

console.log(pessoa)