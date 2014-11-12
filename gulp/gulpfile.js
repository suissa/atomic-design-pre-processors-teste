var gulp   = require('gulp'),
    stylus = require('gulp-stylus');

gulp.task('stylesheets', function(){
	gulp.src('../assets/styl/*.styl')
			.pipe(stylus({compress: true}))
      .pipe(gulp.dest('../dist/css'));
});

gulp.task('build', ['stylesheets']);

gulp.task('default', ['build'], function(){
  gulp.watch('../assets/styl/**/*.styl', ['stylesheets']);
});