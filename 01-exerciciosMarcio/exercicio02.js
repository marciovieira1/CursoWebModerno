/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * 1.) Equilátero: Os três lados são iguais. 
 * 2.) Isósceles: Dois lados iguais. 
 * 3.) Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne 
 * sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair 
 * as condições matemáticas de existência de um triângulo).
 */

 function classificaTriangulo(lado1, lado2, lado3){
     if(lado1 == lado2 && lado1 == lado3){
         return console.log("Esse é um triângulo Equilátero")
     } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
         return console.log("Esse é um triângulo Isósceles")
     } else {
         return console.log("Esse é um triângulo Escaleno")
     }
 }

 classificaTriangulo(10,10,10)
 classificaTriangulo(10,10,2)
 classificaTriangulo(10,11,12)
 