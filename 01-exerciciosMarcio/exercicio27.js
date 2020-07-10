/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento
 * anuais de duas crianças e calcule se existe uma criança menor, caso exista se a 
 * criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize 
 * centímetros para as unidades de medida.
 */

 function calculaCrescimento(altura1, taxa1, altura2, taxa2){
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return 'Criança1 será mais alta que a Criança2 em 1 ano'
        } else if(taxa2 > taxa1){
            return 'Criança2 será mais alta que a Criança1 em 1 ano'
        } else{
            return 'As duas crianças tem a mesma altura e taxa de crescimento'
        }
    } else if(altura1 > altura2){
        if(taxa1 >= taxa2){
            return 'Criança1 sempre será mais alta'
        } else{
            return `Criança2 será mais alta em ${calcularAnos(altura2, taxa2, altura1, taxa1)} ano(s)`
        }
    } else {
        if (taxa2 >= taxa1){
            return 'Criança2 sempre será mais alta'
        } else{
            return `Criança1 será mais alta em ${calcularAnos(altura1, taxa1, altura2, taxa2)} ano(s)`
        }
    }
 }

 function calcularAnos(alturaMenor, taxaMenor, alturaMaior, taxaMaior){
     let qtdAnos = 0 
     while(alturaMenor < alturaMaior){
         alturaMenor += taxaMenor
         alturaMaior += taxaMaior
         qtdAnos++
     }
     return qtdAnos
 }

 console.log(calculaCrescimento(130,50,130,50)) //mesma altura e mesma taxa
 console.log(calculaCrescimento(150,50,140,50)) //criança1 sempre maior
 console.log(calculaCrescimento(100,50,140,30)) //criança1 passa a criança2
 console.log(calculaCrescimento(150,30,100,35)) //criança2 passa a criança1
 console.log(calculaCrescimento(130,50,150,50)) //criança2 sempre maior
 
