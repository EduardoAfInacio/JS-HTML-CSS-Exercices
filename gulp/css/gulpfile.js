const {parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
        // Já converte todo o sass para css tratando erros.
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        //estilo.min.css é o arquivo referenciado pelo css.
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

//Cópia do html é mais rápida que a transformação do css, logo irá finalizar primeiro.
exports.default = parallel(copiarHTML, transformacaoCSS)