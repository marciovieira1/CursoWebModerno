/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos 
 * de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do 
 * vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável
 * auxiliar.
 */

function trocaValores(vetorA, vetorB) {
    let trocaCompleta = true
    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            if (typeof vetorA[i] == "number" && typeof vetorB[i] == "number") {
                vetorA[i] = vetorA[i] + vetorB[i]
                vetorB[i] = vetorA[i] - vetorB[i]
                vetorA[i] = vetorA[i] - vetorB[i]
            } else {
                trocaCompleta = false
            }
        }
        console.log(`VetorA: ${vetorA}`)
        console.log(`VetorB: ${vetorB}`)
        if (trocaCompleta) {
            console.log('Troca total realizada com sucesso!')
        } else {
            console.log('Nem todos os itens são do tipo Number. Troca incompleta!')
        }
    } else {
        console.log('Vetores de tamanhos diferentes')
    }
}
trocaValores([1, 1.5, 3, 4, 5], [6, 7, 8, 9, 10])
