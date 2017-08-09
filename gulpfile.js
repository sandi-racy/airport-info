var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./www/sass/*.scss') //Source all files ending with.scss in scss directory and its subdirectories
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./www/css'))
});

gulp.task('watch', function() {
    gulp.watch('www/sass/*.scss', ['sass']);
});


gulp.task('default',['watch']);
