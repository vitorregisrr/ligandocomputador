function createGameUI() {
	logoEditora = game.add.sprite(110, 40, 'logoEditora');
	logoEditora.enableBody = true;
	logoEditora.anchor.x = 0.5;
	logoEditora.anchor.y = 0.5;
    logoEditora.scale.setTo(0.8, 0.8);
    
    logoJogo = game.add.sprite(110, 140, 'logoPequeno');
	logoJogo.enableBody = true;
	logoJogo.anchor.x = 0.5;
	logoJogo.anchor.y = 0.5;
	logoJogo.scale.setTo(0.8, 0.8);

	btnSom = game.add.button(930, 750, 'btnSom', function(){
		config.sounds ? config.sounds = false : config.sounds = true;
		console.log(config.sounds)
	});
	btnSom.enableBody = true;
	btnSom.anchor.x = 0.5;
	btnSom.anchor.y = 0.5;
	btnSom.scale.setTo(0.8, 0.8);

	
	btnClose = game.add.button(960, 40, 'btnClose', function(){
		showModalSair();
	});
	btnClose.enableBody = true;
	btnClose.anchor.x = 0.5;
	btnClose.anchor.y = 0.5;
    btnClose.scale.setTo(0.8, 0.8);
    
}

function attGameUI(){
	if (btnSom.input.pointerOver()) {
        game.add.tween(btnSom.scale).to({
            x: 0.9,
            y: 0.9
        }, 100, Phaser.Easing.Linear.None, true);
    } else {
        game.add.tween(btnSom.scale).to({
            x: 0.8,
            y: 0.8
        }, 100, Phaser.Easing.Linear.None, true);
    }

    if (btnClose.input.pointerOver()) {
        game.add.tween(btnClose.scale).to({
            x: 0.9,
            y: 0.9
        }, 100, Phaser.Easing.Linear.None, true);
    } else {
        game.add.tween(btnClose.scale).to({
            x: 0.8,
            y: 0.8
        }, 100, Phaser.Easing.Linear.None, true);
    }
}