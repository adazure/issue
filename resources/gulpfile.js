var gulp = require("gulp");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');

// Client için olan sass ve script dosyaları
var sass_client_path = './client/sass/*.scss';
gulp.task('sass-client', function() {
    return gulp.src(sass_client_path)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('issue-client-min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('../app/client/assets/css'));
});

var script_client_path = './client/scripts/*.js';
gulp.task('script-client', function() {
    return gulp.src(script_client_path)
        .pipe(concat('issue-client-min.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('../app/client/assets/scripts'));
});


// Server için olan sass ve script dosyaları
var sass_server_path = './client/sass/*.scss';
gulp.task('sass-server', function() {
    return gulp.src(sass_server_path)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('issue-server-min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./bundle'));
});


gulp.task('default', ['sass-client', 'sass-server', 'script-client'], function() {
    gulp.watch(sass_client_path, ['sass-client']);
    gulp.watch(script_client_path, ['script-client']);
    gulp.watch(sass_server_path, ['sass-server']);
});