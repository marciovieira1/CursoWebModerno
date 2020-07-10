/* O cardápio de uma lanchonete é o seguinte:
 * Código | Descrição do Produto | Preço
 *   100  | Cachorro Quente      | R$ 3,00
 *   200  | Hambúrguer Simples   | R$ 4,00
 *   300  | Cheeseburguer        | R$ 5,50
 *   400  | Bauru                | R$ 7,50
 *   500  | Refrigerante         | R$ 3,50
 *   600  | Suco                 | R$ 2,80
 * Implemente uma função que receba como parâmetros o código do item pedido, 
 * a quantidade e calcule o valor a ser pago por aquele lanche. Considere que 
 * a cada execução somente será calculado um item. Use o comando switch. 
 * Crie um caso default para produto não existente.
 */

function calculaPedido(codigo, quantidade) {
    let valorTotal = 0 
    switch (codigo) {
        case 100:
            valorTotal = 3 * quantidade
            console.log(`${quantidade} Cachorro Quente | Valor unitário = R$ 3,00 | Valor Total = R$ ${valorTotal.toFixed(2).toString().replace('.',',')}`)
            break
        case 200:
            valorTotal = 4 * quantidade
            console.log(`${quantidade} Hamburguer      | Valor unitário = R$ 4,00 | Valor Total = R$ ${valorTotal.toFixed(2).toString().replace('.',',')}`)
            break
        case 300:
            valorTotal = 5.5 * quantidade
            console.log(`${quantidade} Cheeseburguer   | Valor unitário = R$ 5,50 | Valor Total = R$ ${valorTotal.toFixed(2).toString().replace('.',',')}`)
            break
        case 400:
            valorTotal = 7.5 * quantidade
            console.log(`${quantidade} Bauru           | Valor unitário = R$ 7,50 | Valor Total = R$ ${valorTotal.toFixed(2).toString().replace('.',',')}`)
            break
        case 500:
            valorTotal = 3.5 * quantidade
            console.log(`${quantidade} Refrigerante    | Valor unitário = R$ 3,50 | Valor Total = R$ ${valorTotal.toFixed(2).toString().replace('.',',')}`)
            break
        case 600:
            valorTotal = 2.8 * quantidade
            console.log(`${quantidade} Suco            | Valor unitário = R$ 2,80 | Valor Total = R$ ${valorTotal.toFixed(2).toString().replace('.',',')}`)
            break
        default:
            console.log(`${codigo} | Produto inválido`)
    }
}

calculaPedido(100, 5)
calculaPedido(200, 2)
calculaPedido(300, 3)
calculaPedido(400, 2)
calculaPedido(500, 2)
calculaPedido(600, 2)
calculaPedido(700, 6)
