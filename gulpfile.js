var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('copy-fonts', function() {
  gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
      .pipe(gulp.dest('./css/fonts/'));
  gulp.src('./bower_components/font-awesome/css/**/*.{css,css.map}')
      .pipe(gulp.dest('./css/fa/'));
});

gulp.task('build',['sass','copy-fonts']);

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
