var gulp = require('gulp');
var child_process = require('child_process');
var sass = require('gulp-sass');

var paths = {
  sass: ['www/lib/sass/**/*.scss']
};

gulp.task('sass', function() {
  gulp.src('./www/lib/sass/ionic.scss')
        .pipe(sass())
        .pipe(gulp.dest('./www/lib/css/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.docs, ['docs']);
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass']);
