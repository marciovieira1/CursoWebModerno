/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo
 * de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime 
 * de juros simples e a segunda retornará o valor da aplicação sob o regime de juros 
 * compostos.
 */

 function jurosSimples(capital, juros, tempo){
     let montante = capital + (capital * juros * tempo)
     console.log(`Juros Simples: R$ ${montante.toFixed(2).toString().replace(".",",")}`)
 }

 function jurosCompostos(capital, juros, tempo){
     let montante = capital * (1 + juros) ** tempo
     console.log(`Juros compostos: R$ ${montante.toFixed(2).toString().replace(".",",")}`)
 }

 jurosSimples(900,0.05,6)
 jurosCompostos(900,0.05,6)
