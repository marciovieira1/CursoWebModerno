/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, 
 * de acordo com a tabela abaixo:
 * Plano | Aumento
 *   A   |  10%
 *   B   |  15%
 *   C   |  20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário
 * e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso 
 * default que indique que o plano é inválido.
 */

function aumentaSalario(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            console.log(`Salário Ajustado = ${salarioAtual * 1.1}`)
            break
        case 'B':
            console.log(`Salário Ajustado = ${salarioAtual * 1.15}`)
            break
        case 'C':
            console.log(`Salário Ajustado = ${salarioAtual * 1.2}`)
            break
        default:
            console.log(`Plano de trabalho ${plano} é invalido!`)
    }
}

aumentaSalario('A', 1000.00)
aumentaSalario('B', 1000.00)
aumentaSalario('C', 1000.00)
aumentaSalario('D', 1000.00)
aumentaSalario('a', 1000.00)
