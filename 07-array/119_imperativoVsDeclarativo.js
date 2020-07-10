const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 8.3},
    {nome: 'Ana', nota: 10.0},
    {nome: 'Leticia', nota: 9.0},
]

//Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(`Média: ${total1 / alunos.length}`)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(`Média: ${total2 / alunos.length}`)
