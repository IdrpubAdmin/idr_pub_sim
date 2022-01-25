const gulp = require('gulp');
const babel = require("gulp-babel");
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('node-sass'));
const extender = require('gulp-html-extend');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require("node-sass");

gulp.task('sass', function() {
	return gulp.src('css_dev/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(autoprefixer())
	.pipe(sourcemaps.init())
	.pipe(sourcemaps.write('../css'))
	.pipe(gulp.dest('../static/css/'))
});
gulp.task('extend', function () {
	return gulp.src('page_dev/*.html')
	.pipe(extender({annotations:false,verbose:false}))
	.pipe(plumber())
	.pipe(gulp.dest('../page/'));
});

gulp.task('babel', function () {
	return gulp.src('js_dev/*.js')
		.pipe(babel({
			presets: ["@babel/preset-env", "@babel/preset-react"]
		}))
		.pipe(plumber())
		.pipe(gulp.dest('../static/js/'));
});

gulp.task('watch', function() {
	gulp.watch('css_dev/**/*.scss', gulp.series('sass'));``
	gulp.watch('page_dev/*.html', gulp.series('extend'));
	gulp.watch('page_include/*.html', gulp.series('extend'));
	gulp.watch('js_dev/*.js', gulp.series('babel'));
});

gulp.task('default',gulp.parallel(['watch']));