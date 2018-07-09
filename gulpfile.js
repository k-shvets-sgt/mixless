'use strict';

const gulp = require('gulp'),
    fileInclude = require('gulp-file-include'),
    rename = require('gulp-rename');

const path = {
    build: './',
    src: './ml-less-all-in-one-source.less'
}

gulp.task('default', () => {
    return gulp.src(path.src)
        .pipe(fileInclude())
        .pipe(rename('ml-less-all-in-one.less'))
        .pipe(gulp.dest(path.build))
});