var gulp        = require('gulp');
var babel       = require('gulp-babel');
var concat         = require('gulp-concat');
var eslint      = require('gulp-eslint');

gulp.task('build', ['hello', 'styles'], function() {
return gulp.src('src/js/GraphComponent/*.js')
    .pipe(babel({
        "presets": ["react", "es2015"]
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('hello', function() {
return gulp.src('src/js/hello.js')
    .pipe(babel({
        "presets": ["react", "es2015"]
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
return gulp.src('src/css/**/*.css')
	.pipe(concat('bundle.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {
  return gulp.src('src/js/GraphComponent/*.js').pipe(eslint())
  .pipe(eslint.format())
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});
 
gulp.task('watch', ['build'], function () {
    gulp.watch('./src/**/*.*', ['build']);
});
 
gulp.task('default', ['build', 'watch']);
