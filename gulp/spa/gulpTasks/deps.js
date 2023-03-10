//Dependências externas, ex: jquery, bootstrap

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(cb){
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        //não tirar comentários por conta das licensas.
        .pipe(uglifycss({"uglyComments" : false}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts(cb){
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}