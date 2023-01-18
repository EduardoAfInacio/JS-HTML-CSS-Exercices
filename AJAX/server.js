const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//Prove todos os arquivos estáticos da pasta(HTML,JS,CSS,etc.).
app.use(express.static('.'))

//Código responsável por pegar o submit de formulário e transformar em objeto.
//app.use('/teste', bodyParser.urlencoded({extended: true}))
//Resquisições por '/teste' seriam lidas e transformadas em objeto, por exemplo.
//No caso abaixo, todas as requisições de submit caem aqui.
app.use(bodyParser.urlencoded({extended: true}))

//Código responsável por captar o json por requisição e transformar em objeto.
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send(new Date))

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        //data em milisegundos.
        callback(null, `${Date.now()}_${file.originalname}`)
    }

})

//arquivo -> nome do input que virá na requisição.
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req,res) => {
    upload((req,res,err) => {
        if(err){
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        //body só será preenchido se o bodyparser estiver configurado.
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query ?numero=1
    //req.query - rota -> /parOuImpar/:numero
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })

})

app.listen(8080, () => console.log('Executando...'))
//A porta pode ser trocada sem que gere nenhuma mudança.
//npm start para iniciar.