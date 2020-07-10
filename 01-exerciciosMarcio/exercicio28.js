//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function lerVetor(vetor) {
    let numPares = 0
    let numImpares = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            numPares++
        } else {
            numImpares++
        }
    }
    console.log(`Há ${numPares} números pares e ${numImpares} números Ímpares`)
}

lerVetor([1, 5, 9, 55, 23, 65, 6, 8, 10, 30, 22, 84])
