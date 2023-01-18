const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
const { appHTML, appJS } = require('./app')


function monitorarArquivos(cb){
    //Onde quero monitorar.
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

function servidor(cb){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            //Open -> true - abre o browser.
            open: true,
            livereload: true,
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}