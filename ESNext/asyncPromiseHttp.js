const http = require('http')

const getTurmas = turma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''

            resposta.on('data', dados => {
                resultado += dados
            })

            resposta.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })

        })
    })
}

const obterAlunos = async () => {
    const turmaA = await getTurmas('A')
    const turmaB = await getTurmas('B')
    const turmaC = await getTurmas('C')
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
.then(alunos => alunos.map(aluno => aluno.nome))
.then(alunos => alunos.filter(aluno => aluno.includes('ar')))
.then(alunos => console.log(alunos))