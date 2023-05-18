const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('compile-pug', function() {
  return gulp.src('src/*.pug') // Atualize o caminho para seus arquivos Pug
    .pipe(pug())
    .pipe(gulp.dest('dist')); // Atualize o caminho para a pasta de destino do HTML
});

gulp.task('watch', function() {
  gulp.watch('src/*.pug', gulp.series('compile-pug'));
});

gulp.task('default', gulp.series('compile-pug', 'watch'));
