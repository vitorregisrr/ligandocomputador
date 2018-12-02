var bootState = { create:criarBoot, preload: precarregarBoot}

function precarregarBoot() {
    //UI elements
    game.load.image('preloadBar', 'assets/barPreload.png');
    game.load.image('preloadBarBg', 'assets/bgPreload.png');
    game.load.image('logoPreload', 'assets/logoPreload.png');

}

function criarBoot(){
    game.state.start('preloadState');
}
