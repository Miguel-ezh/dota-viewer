var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

gulp.task('mocha', function(){
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('test', function(){
    gulp.run('mocha');
    gulp.watch(['routes/**/*.js',
        'models/**/*.js',
        'test/**/*.js'], ['mocha']);
});