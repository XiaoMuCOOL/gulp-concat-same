'use strict'
const gulp = require('gulp')
const same = require('../index')

/*
 * 默认所有都执行
 */
gulp.task('default', () =>
  gulp.src('css/**')
    .pipe(same({
      prefix: 'mu-',
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'))
)
