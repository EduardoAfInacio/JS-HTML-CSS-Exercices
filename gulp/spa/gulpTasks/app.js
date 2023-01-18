//Arquivos da aplicaçãp: css,html,js.

const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML(){
    return gulp('src/**/*.html')
        //Tirar espaços em branco.
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS(){
    //arquivos que estão diretos na pasta js ou subpastas serão considerados.
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG(){
    //Qualquer extensão de imagem dentro de img ou subpastas.
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

//Registrar para ser possível utilizar através do nome.
gulp.task('appHTML', appHTML)
gulp.task('appJS', appJS)
gulp.task('appCSS', appCSS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}