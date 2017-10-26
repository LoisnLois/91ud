var gulp = require('gulp');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});


gulp.task('js', function() {
    gulp.src('./js/**/*.js') 
      .pipe(minify())
      .pipe(gulp.dest('build/js'));  
});

gulp.task('js:watch',function(){
    gulp.watch('./js/**/*.js',['js']);
});

gulp.task('default',['js:watch','sass:watch']);