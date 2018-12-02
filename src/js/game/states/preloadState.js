var preloadState = { create:criarPreload, preload: precarregarPreload}

function precarregarPreload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = "#ffffff";

    var logo = game.add.sprite(game.world.centerX , game.world.centerY - 80, 'logoPreload');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;
    logo.scale.setTo(0.8, 0.8);

    var preloadBarBg = game.add.sprite(game.world.centerX, game.world.centerY + 40, 'preloadBarBg');
    preloadBarBg.enableBody = true;
    preloadBarBg.anchor.x = 0.5;
    preloadBarBg.anchor.y = 0.5;


    preloadBar = game.add.sprite(game.world.centerX - 170, game.world.centerY - 4 + 40, 'preloadBar');
    this.load.setPreloadSprite(preloadBar);

    game.load.spritesheet('btnNivel1','assets/btnNivel1.png', 202, 285, 3);
    game.load.spritesheet('btnNivel2','assets/btnNivel2.png', 202, 285, 3);
    game.load.spritesheet('btnNivel3','assets/btnNivel3.png', 202, 285, 3);
    game.load.spritesheet('btnNivel4','assets/btnNivel4.png', 202, 285, 3);
    game.load.image('logoGrande', 'assets/logoGrande.png');
    game.load.image('logoPequeno', 'assets/logoPequeno.png');
    game.load.image('logoEditora', 'assets/logoEditora.png');
    game.load.image('btnSom', 'assets/btnSom.png');
    game.load.image('btnClose', 'assets/btnClose.png');
    game.load.image('backgroundNormal','assets/backgroundNormal.png');
    game.load.spritesheet('backgroundFase','assets/backgroundFase.png', 1000, 800, 2);
    game.load.image('verso_carta','assets/verso_carta.png');
    game.load.image('sairSim','assets/sairSim.png');
    game.load.image('sairNao','assets/sairNao.png');
    game.load.image('modalSair','assets/modalSair.png');
    game.load.image('circuito','assets/circuito.png');
    game.load.image('venceuFase', 'assets/venceuFase.png');    
    game.load.image('perdeuFase', 'assets/perdeuFase.png');
    game.load.image('fundoPecas','assets/fundoPecas.png');
    game.load.image('tentarNovamente', 'assets/tentarNovamente.png');
    game.load.image('proximoNivel','assets/proximoNivel.png');
    game.load.image('venceuNivel','assets/venceuNivel.png');
    game.load.spritesheet('lampada','assets/lampada.png', 70, 103, 2);
}


function criarPreload(){
   game.state.start('levelState');
}