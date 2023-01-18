const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function transformacaoJS(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            //remover comentários
            comments: false,
            //env -> versão mais nova do javascript.
            presets: ["env"]
        }))
        //Pegar todo o código e converter para ser minificado.
        .pipe(uglify())
        //Tratar eventos:
        .on('error', err => console.log(err))
        //Pegar todos os arquivos selecionados que já foram trasnpilados usando babel
        //para a versão mais compatível com o browser, já sem espaços e um uma linha.
        //O pipe concatenará esses códigos.
        .pipe(concat('codigo.min.js'))
        //Destino do arquivo.
        .pipe(gulp.dest('build'))
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}

//module.exports.default = parallel(transformacaoJS, fim)
//Caso seja executado em paralelo, fim será terminado primeiro, pois é uma operação
//mais rápida.
module.exports.default = series(transformacaoJS, fim)

