const fs = require('fs')
const caminho = __dirname + '/134_arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(`método sincrono: ${conteudo}`)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`método assincrono: ${config.db.host}:${config.db.port}`)
})

//modo mais simples para leitura do arquivo JSON
const config = require('./134_arquivo.json')
console.log(`método JSON ${config.db.host}:${config.db.port}`)

//leitura do diretório
fs.readdir(__dirname,(err, arquivos)=>{
    console.log('Conteúdo da pasta ...')
    console.log(arquivos)
})
