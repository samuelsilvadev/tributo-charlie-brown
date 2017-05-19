
const gulp = require('gulp' );
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
 
const filesJs = './js/*.js';

gulp.task('lint', function(){
    gulp.src(filesJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('dist', function() {
    gulp.src(filesJs)
    .pipe(concat('./dist'))
    .pipe(rename('dist.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('babel', () => {
    return gulp.src(filesJs)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
   gulp.watch(filesJs, ['lint', 'dist']);
});