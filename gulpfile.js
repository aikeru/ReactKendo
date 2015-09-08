var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    del = require('del');

//TODO:
//  add jspm or other packager
//  add eslint
//  add uglify of some sort, with source map
//  add watch
//  add unit test framework, with integration browser tests

gulp.task('watch', function() {
   gulp.watch(['src/**/*.jsx', 'src/**/*.js', 'demo/**/*.jsx'], ['js']);
});

gulp.task('js', ['package']);

gulp.task('clean', function(done) {
    //return del([
    //    'build/**/*',
    //    'dist/**/*'
    //], function() {
    //    done();
    //});
    done();
});

gulp.task('babel', ['clean'], function() {
	gulp.src(['src/**/*.jsx', 'src/**/*.js'])
	.pipe(babel())
	.pipe(gulp.dest('build'));
    gulp.src(['demo/**/*.jsx'])
    .pipe(babel())
    .pipe(gulp.dest('demo'))
});


//TODO: I really want to use an intelligent module loader
//      but I need one that works well for packaged browser libraries.
gulp.task('package', ['babel'], function() {
   gulp.src(['./build/common.js',
   './build/components/**/*.js',
   './build/reactKendo.js'])
    .pipe(sourcemaps.init())
    .pipe(concat("reactKendo.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write('../dist/'))
    .pipe(gulp.dest('dist'));
});