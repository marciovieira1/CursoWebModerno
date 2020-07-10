/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos
 * e um número inteiro. Faça com que a primeira função retorne outro vetor que será 
 * resultado da multiplicação de cada elemento pelo número passado como parâmetro. 
 * A segunda função fará o mesmo da primeira se e somente se o valor do elemento for 
 * maior que 5.
 */

let vetorInicial = [1, 2, 3, 4, 8]

function geraVetor(vetorInicial, multiplicador) {
    let vetorFinal = []
    vetorInicial.forEach(elemento => {
        vetorFinal.push(elemento * multiplicador)

    })
    console.log(vetorFinal)
}

geraVetor(vetorInicial, 3)

function geraVetor2(vetorInicial, multiplicador) {
    let vetorFinal = []
    vetorInicial.forEach(elemento => {
        if (elemento > 5) {
            vetorFinal.push(elemento * multiplicador)
        }
    })
    console.log(vetorFinal)
}

geraVetor2(vetorInicial, 3)
