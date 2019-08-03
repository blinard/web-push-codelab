/* eslint-disable no-undef */
const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('app')
      .pipe(webserver({
        livereload: true,
        fallback: 'index.html',
        open: true
      }));
});

gulp.task('default', gulp.series('webserver'));
