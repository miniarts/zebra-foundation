/*!
 * gulp
 * $ npm install gulp gulp-sass gulp-autoprefixer gulp-minify-css jshint gulp-jshint gulp-uglify gulp-rename gulp-clean gulp-livereload gulp-concat gulp-sourcemaps --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps');

// Styles
gulp.task('styles', ['clean-styles'], function() {
  return gulp.src(['src/sass/style.scss','src/sass/bootstrap-4.scss'])
    .pipe(sass({
      paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
});

// Bootstrap js - add what you want to include
gulp.task('bootstrapJs', ['clean-scripts'], function() {
  return gulp.src(['src/bootstrap-4.0.0/js/dist/collapse.js', 
                   'src/bootstrap-4.0.0/js/dist/util.js']) 
    .pipe(concat('bootstrap.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/vendor'));
});

// Scripts
gulp.task('scripts', ['clean-scripts','bootstrapJs'], function() {
  return gulp.src('src/js/*.js') 
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('clean-styles', function() {
  return gulp.src(['dist/css/*.css'], {read: false})
    .pipe(clean());
});

gulp.task('clean-scripts', function() {
  return gulp.src(['dist/js/*.js'], {read: false})
    .pipe(clean());
});

gulp.task('clean', function() {
  return gulp.src(['dist/js/*.js'], {read: false})
    .pipe(clean())
    .pipe(gulp.src(['dist/css/*.css'], {read: false}))
    .pipe(clean())
});

// Default task
gulp.task('default', ['clean'], function() {
  return gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('sass/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('**/*.js', ['scripts']);

  // Create LiveReload server
  // livereload.listen();

  // Watch any files in src/, reload on change
  //gulp.watch(['src/**']).on('change', livereload.changed);

});