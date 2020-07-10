function tratarErrorELancar(erro) {
    //throw new Error('Objeto não definido!')
    throw 'Objeto não definido!'
}

function imprimirNomeMaiusculo(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!!")
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('final')
    }
}
const obj = { name: 'Márcio' }
imprimirNomeMaiusculo(obj)
