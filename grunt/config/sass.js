/* jshint node: true */
'use strict';
module.exports = function (grunt) {
    grunt.config('sass', {
        options: {
          sourceMap: true
        },
        dist: {
          options: {
            outputStyle: 'compact'
          },
          files: {
            'dist/css/grid.css': 'src/grid.scss',
          }
        }
    });
};
