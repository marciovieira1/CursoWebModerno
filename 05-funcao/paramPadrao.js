// 4 estratégias da versão antiga. A primeira é a mais famosa. A 4 é mais segura.
function soma2(a, b, c, d) {
    a = a || 1 //Se o parametro 'a' não for informado, vai utilizar o valor 1 como padrão. Essa estratégia não funciona com Zero'0'.
    b = b != undefined ? b : 1 //Nesse caso vai funcionar tanto para undefined como null.
    c = 2 in arguments ? c : 1 //Nesse caso a função testa se há valores na posição de c. Se não ele utiliza o valor padrão.
    d = isNaN(d) ? d : 1 //Essa é a estratégia mais segura. Testa também se o valor passado é número.    
    return a + b + c + d
}

// Melhor e mais moderna forma de usar o valor padrão
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(1, 5, 3))