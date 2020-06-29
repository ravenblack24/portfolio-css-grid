const { sync } = require('gulp-sass');

const gulp = require('gulp'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass');

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
}
    
function style() {
    return (
        gulp
            .src('./scss/**/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./css'))
             .pipe(browserSync.stream())
    );
}
 
gulp.task('style', style);
gulp.task('watch', watch);
gulp.task('default', gulp.parallel('style', 'watch'));