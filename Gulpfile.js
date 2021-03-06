const autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const minifyCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const shell = require('gulp-shell');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

gulp.task('browserSync', () => {
	browserSync({
		server: {
			baseDir: "./dist/"
		},
		notify: false
	});
});

gulp.task('images', (tmp) => {
	return gulp.src(['./images/**/*'])
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest('./dist/images/'));
});

gulp.task('images-deploy', () => {
	return gulp.src(['./images/**/*', '!/images/README'])
		.pipe(plumber())
		.pipe(gulp.dest('./dist/images/'));
});

gulp.task('scripts', () => {
	return gulp.src(['./scripts/**/*.js'])
		.pipe(plumber())
		.on('error', console.error)
		.pipe(concat('build.js'))
		.pipe(gulp.dest('./dist/scripts'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts-clean', function () {
	return del([
		'./dist/scripts/appDev.js',
		'./dist/scripts/handlerEventsDev.js',
	]);
});

gulp.task('scripts-deploy-babel', () => {
	return gulp.src('./dist/scripts/**/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest(file => file.base));
});

gulp.task('scripts-deploy-end', () => {
	return gulp.src('./dist/scripts/**/*.js')
		.pipe(plumber())
		.pipe(concat('build.js'))
		.pipe(uglify())
		.pipe(gulp.dest(file => file.base));
});

gulp.task('styles', () => {
	return gulp.src('./styles/appDev.scss')
		.pipe(plumber({
			errorHandler: (err) => {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourceMaps.init())
		.pipe(sass({
			errLogToConsole: true,
			includePaths: [
				'./styles/'
			]
		}))
		.pipe(autoprefixer({
			browsers: autoPrefixBrowserList,
			cascade: true
		}))
		.on('error', console.error)
		.pipe(concat('styles.css'))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./dist/styles'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('styles-deploy', () => {
	return gulp.src('./styles/appDev.scss')
		.pipe(plumber())
		.pipe(sass({
			includePaths: [
				'./styles/',
			]
		}))
		.pipe(autoprefixer({
			cascade: true
		}))
		.pipe(concat('styles.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('html', () => {
	return gulp.src('./*.html')
		.pipe(plumber())
		.pipe(browserSync.reload({ stream: true }))
		.on('error', console.error)
		.pipe(gulp.dest('./dist'));
});

gulp.task('clean', () => {
	return gulp.src('dist', { read: false, allowEmpty: true })
		.pipe(clean());
});

gulp.task('scaffold', (done) => {
	shell.task([
		'mkdir ./dist',
		'mkdir ./dist/fonts',
		'mkdir ./dist/images',
		'mkdir ./dist/scripts',
		'mkdir ./dist/styles'
	]);

	done();
});

gulp.task('deploy', gulp.series('clean', 'scaffold', 'html', 'scripts', 'scripts-deploy-babel', 'scripts-deploy-end', 'styles-deploy', 'scripts-clean', 'images-deploy'));

gulp.task('default', gulp.parallel(['html', 'browserSync', 'scripts', 'scripts-clean', 'styles', 'images-deploy'], () => {
	gulp.watch('./scripts/**', gulp.parallel('scripts', 'scripts-clean'));
	gulp.watch('./styles/**', gulp.series('styles'));
	gulp.watch('./images/**',  gulp.series('images'));
	gulp.watch('./*.html',  gulp.series('html'));
}));

