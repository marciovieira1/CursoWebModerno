/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e 
 * conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo 
 * é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, 
 * escrevendo estas informações.
*/

function lerVetor(vetor, inicialFinal){
    let dentro = 0
     for(let i = 0; i < vetor.length; i++){
        if (vetor[i] >= inicialFinal[0] && vetor[i] <= inicialFinal[1]){
            dentro++
        }
    }
    console.log(`Há ${dentro} números dentro do intervalo entre (${inicialFinal[0]} e ${inicialFinal[1]}) e ${vetor.length - dentro} fora`)
}
lerVetor([1, 5, 8, 10, 12, 15, 16,18,20, 31, 35,33],[10,20])
