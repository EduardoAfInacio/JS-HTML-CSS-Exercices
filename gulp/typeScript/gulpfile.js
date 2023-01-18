const {series, parallel} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    //Não é preciso informar o src, pois a partir do tsconfig ele já possui essa informação.
    return tsProject.src()
        //Processo de compilação.
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)