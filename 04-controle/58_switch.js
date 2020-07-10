const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("Quadro de honra")
            break // esta palavra impede o javascript de ir para o próximo case.
        case 8: case 7:
            console.log("Aprovado!")
            break
        case 6: case 5: case 4:
            console.log("Recuperação!")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado!")
            break
        default:
            console.log("Nota inválida!")
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado('Epa') //mesmo passando uma string onde se espera um número, o javascript foi capaz de identificar e dar a resposta adequada
