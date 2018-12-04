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
            'src/js/phaser.js',

            'src/js/game/main/soundsJson.js',
            'src/js/game/main/bancoCombinacoes.js',
            'src/js/game/main/criaCircuito.js',
            'src/js/game/main/eventoPecas.js',
            'src/js/game/main/sounds.js',

            'src/js/libs/modalLib.js',
            'src/js/libs/tooltipLib.js',
            'src/js/libs/phase-slide.js',

            'src/js/game/main/modalsGen.js',
            'src/js/game/main/rodada.js',
            'src/js/game/main/gameUI.js',

            'src/js/game/states/preloadState.js',
            'src/js/game/states/bootState.js',
            'src/js/game/states/levelState.js',
            'src/js/game/states/faseNumerais.js',
            'src/js/game/states/faseMaiusculas.js',
            'src/js/game/states/faseMinusculas.js',
            'src/js/game/states/faseMeses.js',

            'src/js/game/main/gameLoadStates.js',

        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/'));
});