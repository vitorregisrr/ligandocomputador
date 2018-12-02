var game;
var reg = {};
function loadgame() {
    var screenWidth = 1000;
    var screenHeight = 800;
    var centerX = screenWidth / 2;
    var centerY = screenHeight / 2;
    game = new Phaser.Game(screenWidth, screenHeight, Phaser.CANVAS, '#game', null);

    //plugins
    reg.modal = new gameModal(game);

    game.state.add('preloadState', preloadState);
    game.state.add('bootState', bootState);
    game.state.add('levelState', levelState);

    game.state.add('fase1', faseNumerais);

    //define estado inicial
    game.state.start('bootState');
}

loadgame();

function gameOver() {
    game.paused = true;
    showGameOverModal();
}

function levelSuccess() {
    //estrelas
    if (starsArray[levelNumber - 1] < 2) {
        starsArray[levelNumber - 1] = 2;
        localStorage.setItem('starsArray', JSON.stringify(starsArray));
    }

    showGameSucessModal();
}


function resize() {
    var canvas = game.canvas,
        width = window.innerWidth,
        height = window.innerHeight;
    var wratio = width / height,
        ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
        canvas.style.width = width + "px";
        canvas.style.height = (width / ratio) + "px";
    } else {
        canvas.style.width = (height * ratio) + "px";
        canvas.style.height = height + "px";
    }
}
window.addEventListener('resize', resize);
resize();