var gulp = require('gulp');
var child_process = require('child_process');
var sass = require('gulp-sass');
var Q = require('q');

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

// Initialize the project to the most recent release
gulp.task('init', function() {
  var q = Q.defer();
  console.log('Installing latest stable release of Ionic from bower');

  var ls = child_process.spawn('bower', ['install', 'driftyco/ionic-bower'], {
    stdio: 'inherit'
  });
  ls.on('close', function(code) {
    q.resolve();
  });

  return Q.all([q.promise]);
});

gulp.task('default', ['sass']);
