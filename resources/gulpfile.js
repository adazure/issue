var gulp = require("gulp");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var sass = require('gulp-sass');

// Client için olan sass ve script dosyaları
var sass_client_path = './client/sass/*.scss';
gulp.task('sass-client', function() {
    return gulp.src(sass_client_path)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('issue-client-min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./bundle'));
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


gulp.task('default', ['sass-client', 'sass-server'], function() {
    gulp.watch(sass_client_path, ['sass-client']);
    gulp.watch(sass_server_path, ['sass-server']);
});