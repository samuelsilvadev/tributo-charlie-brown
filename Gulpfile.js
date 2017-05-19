
const gulp = require('gulp' );
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
 
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

gulp.task('default', function () {
    console.log('hello world');
    //gulp.run('lint', 'dist');
    gulp.watch(filesJs, ['lint', 'dist']);
});