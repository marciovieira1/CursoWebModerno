/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
 * A função recebe como parâmetro um inteiro que representa o mês 
 * (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve 
 * ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
 * compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

function pagamentoAnuidade(mes, valor) {
    if (mes > 0 && mes < 13) {
        return (valor * ((1 + (5/100))**(mes-1))).toFixed(2).toString().replace('.',',')
    } else {
        return 'Mês inválido!'
    }
}
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(1, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(2, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(3, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(4, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(5, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(6, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(7, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(8, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(9, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(10, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(11, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(12, 100)}`)
console.log(`Valor atualizado: R$ ${pagamentoAnuidade(13, 100)}`)



