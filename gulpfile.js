var gulp = require('gulp');
var concat = require('gulp-concat');
var child_process = require('child_process');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var prompt = require('prompt');
var argv = require('yargs').argv;
var fs = require('fs');
var ncp = require('ncp').ncp;
var Q = require('q');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.scss')
    .pipe(sass())
    .pipe(concat('ionic.css'))
    .pipe(gulp.dest('./www/css/ionic/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/ionic/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

// Bootstrap the project by loading ionic from bower and copying over
// Any sass files (requires the --sass flag to gulp bootstrap as it's potentially destructive).
gulp.task('bootstrap', function() {
  var bowerQ = Q.defer(), sassQ = Q.defer();
  console.log('Installing latest stable release of Ionic from bower');

  var ls = child_process.spawn('bower', ['install', 'driftyco/ionic-bower'], {
    stdio: 'inherit'
  });
  ls.on('close', function(code) {
    bowerQ.resolve();
  });

  bowerQ.promise.then(function() {
    if(argv.sass) {
      console.log('Creating sass files');
      ncp('./www/lib/ionic/scss/', 'scss', function(err) {
        if(err) {
          console.error(err);
        }
        sassQ.resolve();
      });
    } else {
      sassQ.resolve();
    }
  });

  return Q.all([bowerQ.promise, sassQ]);
});

gulp.task('default', ['sass']);
