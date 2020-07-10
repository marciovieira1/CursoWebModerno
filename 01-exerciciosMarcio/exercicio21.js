/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a 
 * idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a
 * seguinte tabela: 
 * 1) crianças com menos de 10 anos pagam R$80; 
 * 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
 * 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
 * 4) conveniados acima de 60 anos pagam R$130 
 */
function precoPlano(idade) {
    let valor = 100
    if (idade < 10) {
        return valor += 80
    } else if (idade <= 30) {
        return valor += 50
    } else if (idade <= 60) {
        return valor += 95
    } else {
        return valor += 130
    }
}

console.log(`Valor do plano: ${precoPlano(5)}`)
console.log(`Valor do plano: ${precoPlano(10)}`)
console.log(`Valor do plano: ${precoPlano(20)}`)
console.log(`Valor do plano: ${precoPlano(30)}`)
console.log(`Valor do plano: ${precoPlano(60)}`)
console.log(`Valor do plano: ${precoPlano(62)}`)
