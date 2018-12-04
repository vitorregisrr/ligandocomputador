var levelState = {
	create: criarLevelState,
	update: atualizarLevelState,
};

//local storage progress stars array
var starsArray = [1, 0, 0, 0];

var levels;

soundLoop = null;
function criarLevelState() {
	sounds.gen();
	createModals();
	//gerando o bg
	game.add.sprite(0, 0, 'backgroundNormal');

	if(soundLoop){
		clearInterval(soundLoop);
	}
	game.sound.stopAll();
	sounds.play('musicajogo');
	soundLoop = setInterval(function () {
		sounds.play('musicajogo');
	}, 150000);

	var logo = game.add.sprite(game.world.centerX, game.world.centerY - 160, 'logoGrande');
	logo.enableBody = true;
	logo.anchor.x = 0.5;
	logo.anchor.y = 0.5;
	logo.scale.setTo(1, 1);

	var logoEditora = game.add.sprite(880, 60, 'logoEditora');
	logoEditora.enableBody = true;
	logoEditora.anchor.x = 0.5;
	logoEditora.anchor.y = 0.5;
	logoEditora.scale.setTo(0.8, 0.8);

	btnSom = game.add.button(930, 740, 'btnSom', function(){
		if(game.sound.mute){
			game.sound.mute = false;
			btnSom.frame = 0;
		}else{
			game.sound.mute = true;
			btnSom.frame = 1;
		};
	});

	btnSom.enableBody = true;
	btnSom.anchor.x = 0.5;
	btnSom.anchor.y = 0.5;
	btnSom.scale.setTo(0.8, 0.8);


	levels = game.add.group();
	var level = new Array();
	var pl = [
		[180, 450],
		[340, 450],
		[500, 450],
		[660, 450]
	];

	for (x = 0; x < 4; x++) {
		var a = x + 1;
		level[x] = game.add.button(pl[x][0], pl[x][1], 'btnNivel' + a, thumbClicked, this);
		var e = level[x];
		e.levelNumber = x + 1;
		e.inputEnabled = true;
		e.scale.setTo(0.7, 0.7);
		e.frame = starsArray[x];
		levels.add(e);
	}
}

function atualizarLevelState() {

	levels.forEach(function (e) {
		if (e.input.pointerOver()) {
			game.add.tween(e.scale).to({
				x: 0.75,
				y: 0.75,
			}, 100, Phaser.Easing.Linear.None, true);
		} else {
			game.add.tween(e.scale).to({
				x: 0.7,
				y: 0.7
			}, 100, Phaser.Easing.Linear.None, true);
		}
	});

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
	
}

function thumbClicked(button) {
	sounds.play('cliqueinstrucoes');
	// the level is playable, then play the level!!
	if (button.frame > 0) {
		game.state.start('fase' + button.levelNumber);

	}
	// else, let's shake the locked levels
	else {
		var buttonTween = game.add.tween(button)
		buttonTween.to({
			x: button.x + 10
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - 10
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x + 10
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - 10
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.start();
	}
}