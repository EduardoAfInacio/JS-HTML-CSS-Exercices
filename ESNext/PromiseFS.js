const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, 'PromiseFSdata.txt')

const lerArquivo = caminho => {
    return new Promise((resolve, reject) => {
        try{
            fs.readFile(caminho, function(_, conteudo) {
                resolve(conteudo.toString())
            })
        }catch(e){
            reject(e)
        }
    })
}

const lerArquivoAsincronamente = async () => {
    conteudoArquivo = await lerArquivo(caminho)
    return conteudoArquivo
}

lerArquivoAsincronamente()
.then(conteudo => conteudo.split('\n'))
.then(conteudo => conteudo.join(','))
.then(conteudo => console.log(conteudo))
.catch(err => console.log(err))
//catch finaliza.

