//Escrever um programa para exibir os números de 1 até 50 na tela.

//Método 1. Utilizando while
function imprimirNumeros() {
    let i = 1
    while (i <= 50) {
        console.log(i)
        i++
    }
}
console.log("......utilizando FOR ......")
imprimirNumeros()

//Método 2. Utilizando for
function contador() {
    for (let i = 1; i < 50; i++) {
        console.log(i)
    }
}
console.log("......utilizando FOR ......")
contador()
