/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números 
 * negativos há nesse vetor e imprime a quantidade no console.
 */

function numNegativos(vetor) {
    let qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }
    }
    console.log(`Há ${qtdNegativos} número(s) negativos`)
}

numNegativos([5, 55, 65, -65, -87, -4, 6, 8, -9])
