var gulp   = require('gulp'),
    sass = require('gulp-sass');

gulp.task('stylesheets', function(){
	gulp.src('../assets-sass/sass/*.scss')
			.pipe(sass({compress: true}))
      .pipe(gulp.dest('../dist-sass/css'));
});

gulp.task('build', ['stylesheets']);

gulp.task('default', ['build'], function(){
  gulp.watch('../assets-sass/sass/**/*.scss', ['stylesheets']);
});