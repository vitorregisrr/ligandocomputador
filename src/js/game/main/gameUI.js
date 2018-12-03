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
    
    estatisticas = game.add.sprite(650, 30, 'estatisticas');
	estatisticas.enableBody = true;
	estatisticas.anchor.x = 0.5;
    estatisticas.anchor.y = 0.5;
    
    textoAcertos = game.add.text(840, 15, 0, {
        fill: "#fff",
        fontSize: "35px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2
    });
    textoAcertos.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

    textoErros = game.add.text(675, 15, 0, {
        fill: "#fff",
        fontSize: "35px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2
    });
    textoErros.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

    textoFase = game.add.text(515, 15, '1/6', {
        fill: "#fff",
        fontSize: "35px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2
    });
    textoFase.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

	btnSom = game.add.button(930, 750, 'btnSom', function(){
        if(game.sound.mute){
			game.sound.mute = false;
			btnSom.frame = 0;
		}else{
			game.sound.mute = true;
			btnSom.frame = 1;
        };
        sounds.play('cliqueinstrucoes');
    });
    
	btnSom.enableBody = true;
	btnSom.anchor.x = 0.5;
	btnSom.anchor.y = 0.5;
	btnSom.scale.setTo(0.8, 0.8);

	
	btnClose = game.add.button(960, 40, 'btnClose', function(){
        showModalSair();
        sounds.play('cliqueinstrucoes');
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