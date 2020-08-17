const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const { functions } = require('lodash')

function tranformacaoCSS(){
    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "uglyComments": true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiar(cb) {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}


exports.default = series(tranformacaoCSS, copiar)