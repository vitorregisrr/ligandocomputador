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
            'canvasAPK/js/phaser.js',

            'canvasAPK/js/game/main/soundsJson.js',
            'canvasAPK/js/game/main/bancoCombinacoes.js',
            'canvasAPK/js/game/main/criaCircuito.js',
            'canvasAPK/js/game/main/eventoPecas.js',
            'canvasAPK/js/game/main/sounds.js',

            'canvasAPK/js/libs/modalLib.js',
            'canvasAPK/js/libs/tooltipLib.js',
            'canvasAPK/js/libs/phase-slide.js',

            'canvasAPK/js/game/main/modalsGen.js',
            'canvasAPK/js/game/main/rodada.js',
            'canvasAPK/js/game/main/gameUI.js',

            'canvasAPK/js/game/states/preloadState.js',
            'canvasAPK/js/game/states/bootState.js',
            'canvasAPK/js/game/states/levelState.js',
            'canvasAPK/js/game/states/faseNumerais.js',
            'canvasAPK/js/game/states/faseMaiusculas.js',
            'canvasAPK/js/game/states/faseMinusculas.js',
            'canvasAPK/js/game/states/faseMeses.js',

            'canvasAPK/js/game/main/gameLoadStates.js',

        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('canvasAPK/'));
});