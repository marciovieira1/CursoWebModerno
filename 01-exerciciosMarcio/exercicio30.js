/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor 
 * valor dentro do vetor.
 */

 function lerVetor(vetor){
     let maiorValor = vetor[0]
     let menorValor = vetor[0]
     for (let i = 1; i < vetor.length; i++){
         if(vetor[i] < menorValor){
             menorValor = vetor[i]
         }
         if(vetor[i]>maiorValor){
             maiorValor = vetor[i]
         }
     }
     return `Menor valor: ${menorValor} - Maior valor: ${maiorValor}`
 }

 console.log(lerVetor([55, 5, 8, 10, 12, 15, 16,18,20, 31, 35,33]))
 