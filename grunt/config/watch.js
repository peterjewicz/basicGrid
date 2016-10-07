/* jshint node: true */
'use strict';
module.exports = function (grunt) {
    grunt.config('watch', {
        styles: {
            files: ['src/**/*.scss'],
            tasks: ['sass', 'autoprefixer'],
        }
    });
};
