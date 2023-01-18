const gulp = require('gulp')
const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb){
    //src() -> selecionar quais arquivos serão usados como entrada para o workflow.
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //Qualquer arquivo da pastaA que possua como extensão .txt irá para a B.
    gulp.src('pastaA/**/*.txt')
            //Aplicar transformações nos arquivos definidos.
            //Ex: diminuir todas pela metade
            //.pipe(imagemPelaMetade())
            //.pipe(imagemEmPretoEBranco())
            //Onde será salvo o produto final com as transformações.
            .pipe(gulp.dest('pastaB'))
            //Build, código que irá para o servidor.
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

//Executar em serie, uma atras da outra.
module.exports.default = series(
    //Executar em paralelo.
    parallel(antes1,antes2),
    copiar,
    fim,
    )