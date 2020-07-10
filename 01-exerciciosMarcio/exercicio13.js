/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido
 * dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
 * Utilize a estrutura Switch.
 */

function classificaDia(numero) {
    switch (numero) {
        case 1: case 7:
            return "Fim de semana"
        case 2: case 3: case 4: case 5: case 6: 
            return "Dia útil"
        default: 
            return "Dia inválido"
    }
}

console.log(`Dia 1: ${classificaDia(1)}`) //domingo 
console.log(`Dia 2: ${classificaDia(2)}`) //segunda
console.log(`Dia 3: ${classificaDia(3)}`) //terça
console.log(`Dia 4: ${classificaDia(4)}`) //quarta
console.log(`Dia 5: ${classificaDia(5)}`) //quinta
console.log(`Dia 6: ${classificaDia(6)}`) //sexta
console.log(`Dia 7: ${classificaDia(7)}`) //sábado
console.log(`Dia a: ${classificaDia('a')}`) //inválido
