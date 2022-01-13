// 최신의 css를 사용할 때 구형 브라우저도 이해할수 있게 prefix를 만들어줌
const gulp = require('gulp');
const babel = require("gulp-babel");
//gulp 플러그인 오류로인한 파이프문제 해결
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('node-sass'));
// const sass = require('gulp-ruby-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const pcFocus = require('postcss-focus');
const pcFontpath = require('postcss-fontpath');
const stylelint = require('stylelint');
const extender = require('gulp-html-extend');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require("node-sass");

gulp.task('sass', function() {

	//css_dev에 있는 모든 scss파일을 가져옴
	return gulp.src('css_dev/*.scss')
	// .pipe(plumber())
	// .pipe(sourcemaps.init())
	// .pipe(sassGlob())
	.pipe(sass().on('error',sass.logError))
	.pipe(autoprefixer())
	// .pipe(postcss(
	// 	[pcFontpath({
	// 		formats: [
	//     {	type:'embedded-opentype', ext: 'eot' },
	//     {	type: 'woff2', ext: 'woff2' },
	//     {	type: 'woff', ext: 'woff' },
	//     {	type: 'truetype', ext: 'ttf' }    
	//   ]
	//  })],
	// 	//[autoprefixer({browsers: ['last 2 versions']})],
	// 	[autoprefixer()],
	// 	[pcFocus()]
	// 	))	
	// .pipe(sourcemaps.write('../css'))
	//저장위치
	.pipe(gulp.dest('../page/css'))
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
			//presets: ["@babel/preset-env"]
			presets: ["@babel/preset-env", "@babel/preset-react"]
		}))
		.pipe(plumber())
		.pipe(gulp.dest('../page/js/'));
});

gulp.task('watch', function() {
	//css_dev의 모든 상위폴더안의 scss파일을 지켜봄 
	gulp.watch('css_dev/**/*.scss', gulp.series('sass'));
	gulp.watch('page_dev/*.html', gulp.series('extend'));
	gulp.watch('page_include/*.html', gulp.series('extend'));
	gulp.watch('js_dev/*.js', gulp.series('babel'));
});

gulp.task('default',gulp.parallel(['watch']));