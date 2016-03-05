var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	htmlmin = require('gulp-htmlmin'),
	gutil = require('gulp-util');

gulp.task('minify', function(){
	gulp.src('src/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('dist'));
});

gulp.task('styles', function(){
	gulp.src('src/css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/minCSS'));
});

gulp.task('scripts', function(){
	gulp.src('src/js/resumeBuilder.js')
		.pipe(uglify())
		.pipe(rename('resumeBuilder-ugly.js'))
		.pipe(gulp.dest('dist/js'));
});



gulp.task('default', ['minify', 'styles', 'scripts']);
