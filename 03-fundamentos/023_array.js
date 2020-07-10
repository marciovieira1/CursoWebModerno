const valores = [7.7,8.9,6.3,9.2] //cria um array com valores literais
console.log(valores[0],valores[3]) //exibe o primeiro e o último valor do array

valores[4]=10 //adiciona um valor no array
console.log(valores) //exibe todos os valores do array
console.log(valores.length) //tamanho do array

valores.push({id:3},false,null,'teste') //incluir valores no array criado.

console.log(valores.pop()) //exclui o último valor do array 

delete valores[0] //exclui um valor de uma posição especifica. Nesse caso, a posição zero aparece com empty

console.log(valores)