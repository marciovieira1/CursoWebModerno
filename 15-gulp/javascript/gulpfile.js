const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments:false,
            presets: ["env"] //versão mais nova do JavaScript
        }))
        .pipe(uglify()) //torna o arquivo minificado. (sem espaços)
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
        // return cb()
}

exports.default = series(padrao)