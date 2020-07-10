/*
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console 
 * a soma, subtração, multiplicação e divisão desses valores.
*/

function operacoesMatematicas(num1, num2){
    console.log(`Soma: ${num1 + num2}`)
    console.log(`Subtração: ${num1 - num2}`)
    console.log(`Multiplicação: ${num1 * num2}`)
    console.log(`Divisão: ${num1 / num2}`)

    //ou 

    console.log( num1 + num2, num1 - num2, num1 *  num2, num1 / num2)
}

operacoesMatematicas(10,2)
