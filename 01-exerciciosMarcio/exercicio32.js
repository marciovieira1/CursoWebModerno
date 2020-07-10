//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
function calculaMedia(vetor){
    let somaNumero = 0 
    for (let i = 0; i < vetor.length; i++){
        somaNumero += vetor[i]
    }
    console.log(`Média: ${somaNumero / vetor.length}`)
}
calculaMedia([1,50,6,8,10,30])
