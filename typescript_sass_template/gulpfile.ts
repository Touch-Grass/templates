const { watch } = require('gulp');
const gulp = require('gulp');
const WB = require('webpack-stream');

const files = ['**/*', '!dist/**/*', '!node_modules/**/*'];

const webpack = () =>
    gulp
        .src(files)
        .pipe(WB(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));

const build = () => watch(files, webpack);

exports.default = build;
