/* jshint node: true */
/* jshint camelcase: false */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
'use strict';
module.exports = function (grunt) {
    grunt.config('autoprefixer', {
      options: {
          browsers: ['last 2 versions', 'ie 9']
        },
      dist: {
        files: {
          'templates/main/dist/css/site.css': 'templates/main/dist/css/site.css',
          'templates/main/dist/css/bookingmask/widget.css': 'templates/main/dist/css/bookingmask/widget.css',
          'templates/main/dist/css/banner-scroller/widget.css': 'templates/main/dist/css/banner-scroller/widget.css',
          'templates/main/dist/css/gallery/widget.css': 'templates/main/dist/css/gallery/widget.css',
          'templates/main/dist/css/hero-image-slideshow/widget.css': 'templates/main/dist/css/hero-image-slideshow/widget.css',
          'templates/main/dist/css/list-category-grid-details/widget.css': 'templates/main/dist/css/list-category-grid-details/widget.css',
          'templates/main/dist/css/list-grid-details/widget.css': 'templates/main/dist/css/list-grid-details/widget.css',
          'templates/main/dist/css/list-grid-alternating-blocks/widget.css': 'templates/main/dist/css/list-grid-alternating-blocks/widget.css',
          'templates/main/dist/css/map-with-directions/widget.css': 'templates/main/dist/css/map-with-directions/widget.css',
          'templates/main/dist/css/map-with-markers/widget.css': 'templates/main/dist/css/map-with-markers/widget.css',
          'templates/main/dist/css/explore-nomap/widget.css': 'templates/main/dist/css/explore-nomap/widget.css',
          'templates/main/dist/css/amenities/widget.css': 'templates/main/dist/css/amenities/widget.css',
          'templates/main/dist/css/offers-scroller/widget.css': 'templates/main/dist/css/offers-scroller/widget.css'
        }
      }
  });
};
