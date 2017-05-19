
const gulp = require('gulp' );
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
 
const filesJs = './dist/*.js';

gulp.task('clean', () => {
  return gulp.src('./dist/*', {read: false})
    .pipe(clean());
});

gulp.task('lint', () => {
    gulp.src(filesJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('babel', () => {
    return gulp.src('./js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', () => {
    gulp.src(filesJs)
    .pipe(concat('./dist'))
    .pipe(rename('dist.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean', 'babel', 'dist']);