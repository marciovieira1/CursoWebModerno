/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne 
 * a base elevada ao expoente.
 */

function calculaPotencia(base, expoente) {
    // Método antigo 
    let potencia = Math.pow(base, expoente)

    // Método novo
    potencia = base ** expoente

    return console.log(`Potencia é igual: ${potencia}`)
}

calculaPotencia(2, 4)
