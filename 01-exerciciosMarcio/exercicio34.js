/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará 
 * True ou False caso todos os caracteres (independentemente de ser maiúsculo ou 
 * minúsculo) estejam contidos em ambas palavras. 
*/

function testeString(string1, string2){
    let contem = true
    for (let i = 0 ; i< string1.length; i ++){
        let caractString1 = string1.charAt(i).toLowerCase()
        for (let y = 0; y < string2.length; y ++){
            let caractString2 = string2.charAt(y).toLowerCase()
            if(caractString1 == caractString2){
                contem = true
                break
            } else {
                contem  = false
            }
        }
        if(!contem){
            return contem
        }
    }
    return contem
}
console.log(testeString('gdMARCIOx', 'marcioxggds'))
