'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function () {
	return gulp.src('test/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('test/result/'));
});
