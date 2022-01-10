import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";
import miniCSS from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";

const sass = require("gulp-sass")(require("node-sass"));

sass.compiler = require("node-sass");

const routes = {
    pug: {
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    },
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/styles.scss",
        dest: "build/css"
    },
    js: {
        watch: "src/js/**/*.js",
        src: "src/js/main.js",
        dest: "build/js"
    }
};

const pug = () =>
    gulp
    .src(routes.pug.src)
    .pipe(gpug())
    .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build/"]);

const webserver = () =>
    gulp
    .src("build")
    .pipe(ws({
        livereload: true,
        open: true
    }));

const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.scss.watch, styles);
    gulp.watch(routes.js.watch, js);
};

const styles = () =>
    gulp
    .src(routes.scss.src)
    .pipe(sass().once("error", sass.logError))
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest));

const js = () =>
    gulp
    .src(routes.js.src)
    .pipe(
        bro({
            tramsfrom: [babelify.configure({
                    presets: ["@babel/prese-env"]
                }),
                ["uglifyify", {
                    global: true
                }]
            ]
        })
    ).pipe(gulp.dest(routes.js.dest));

const prepare = gulp.series([clean]);

const assets = gulp.series([pug, styles, js]);

const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);