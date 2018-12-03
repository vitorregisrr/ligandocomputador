var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    audiosprite = require('gulp-audiosprite');

gulp.task('audiosprite', function () {
    gulp.src('src/assets/sounds/*.mp3')
        .pipe(audiosprite({
            format: 'ogg'
        }))
        .pipe(gulp.dest('src/assets/sounds/spriteJson'));
});

gulp.task('imagesmin', function () {
    gulp.src('src/assets/**/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/'));
});

gulp.task('js', function () {
    gulp.src([

            'src/js/libs/modalLib.js',
            'src/js/libs/tooltipLib.js.js',
            'src/js/libs/phase-slide.js.js',

            'src/js/states/preloadState.js',
            'src/js/states/startState.js',
            'src/js/states/levelState.js',
            'src/js/states/bootState.js',
            'src/js/states/gameLoadStates.js',

            'src/js/main/gameUI.js',
            'src/js/main/modalsGen.js',
            'src/js/main/sounds.js'

        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/js/'));
});