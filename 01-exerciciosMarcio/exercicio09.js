/* Construa uma função para um sistema de notas de uma instituição que possui a
 * seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. 
 * Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra 
 * de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for 
 * menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for 
 * abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na 
 * reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota
 * 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento 
 * eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, 
 * o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

//CÓDIGO 1. NUMA ÚNICA FUNÇÃO
function avaliaAluno(nota) {
    let resultado = ""
    let notaFinal = 0
    if (nota >= 0 && nota <= 100) {
        if (parseInt(nota) < 38) {
            resultado = "Aluno Reprovado!"
            notaFinal = nota
        } else {
            if ((nota % 5) > 2) {
                notaFinal = nota + (5 - (nota % 5))
            } else {
                notaFinal = nota
            }
            resultado = "Aluno Aprovado!"
        }

    } else {
        resultado = "Nota inválida!"
        notaFinal = nota
    }
    console.log(`Nota final: ${notaFinal} - ${resultado}`)
}

avaliaAluno(-38)
avaliaAluno(38)
avaliaAluno(43)
avaliaAluno(82)
avaliaAluno(120)
avaliaAluno(100)

// CÓDIGO 2. DIVIDINDO EM DUAS FUNÇÕES

function avaliaAluno2(nota) {
    let notaFinal = arredondaNota(nota)
    if (parseInt(nota) >= 0 && parseInt(nota) <= 100) {
        if (parseInt(notaFinal) >= 40) {
            console.log(`Nota final: ${notaFinal} - Aluno Aprovado!`)
        } else {
            console.log(`Notal final: ${notaFinal} - Aluno Reprovado`)
        }
    } else {
        console.log(`Nota final: ${nota} - Nota Inválida!`)
    }
}

function arredondaNota(nota) {
    if ((parseInt(nota) % 5) > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log("...................")
avaliaAluno2(-38)
avaliaAluno2(38)
avaliaAluno2(43)
avaliaAluno2(82)
avaliaAluno2(120)
avaliaAluno2(100)
