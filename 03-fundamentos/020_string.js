const aluno = "Márcio"

console.log(aluno.charAt(1)) //mostra o caracter da posição 1 de uma constante string. Sempre começa com 0;
console.log(aluno.indexOf('á')) // mostra em posição determinado caracter está numa string
console.log(aluno.substring(2,4)) // corta a string de acordo com a posição inicial e final

console.log('Aluno: '.concat(aluno).concat("!")) //concatenar string e variáveis/constante
console.log('Aluno: '+aluno+"!") //concatenar string e variáveis/constante
console.log(`Aluno: ${aluno}!`) //concatenar string e variáveis/constante
console.log(aluno.replace('o','a')) //troca um caracter por outro

console.log('Marcio Vieira de Souza'.split(' '))//Separa uma string em uma matriz

