
const gulp = require('gulp' );
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

const filesJs = './dist/*.js';
const filesCss = './css/*.css';
const folderDestiny = 'dist';

gulp.task('clean', () => {
  return gulp.src('./dist/*', {read: false})
    .pipe(clean());
});

gulp.task('lint', () => {
    return gulp.src(filesJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('babel', () => {
    return gulp.src('./js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(folderDestiny));
});

gulp.task('dist', () => {
    return gulp.src(filesJs)
    .pipe(concat('./dist'))
    .pipe(rename('dist.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(folderDestiny));
});

gulp.task('css', () => {
  return gulp.src(filesCss)
    .pipe(rename('dist.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(folderDestiny));
});

gulp.task('image', () => {
    return gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(folderDestiny+'/img/'))
});

/**
 * Sass configs
 */

const sassDevOptions = {
    outputStyle: 'expanded'
}

const sassProdOptions = {
    outputStyle: 'compressed'
}

gulp.task('sassdev', () => {
    return gulp.src('./css/*.scss')
    .pipe(sass(sassDevOptions))
    .pipe(gulp.dest(folderDestiny));
});

gulp.task('sassprod', () => {
    return gulp.src('./css/*.scss')
    .pipe(sass(sassProdOptions))
    .pipe(gulp.dest(folderDestiny));
});

gulp.task('default', () => {
    return runSequence('clean', 'babel', 'dist', 'image', 'css');
});