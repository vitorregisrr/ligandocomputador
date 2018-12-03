var faseMinusculas = {
	create: criarFaseMinusculas,
	update: atualizarFaseMinusculas,
};

function criarFaseMinusculas() {
	createModals();
	sounds.gen();
	erros = 0;
	acertos = 0;
	levelNumber = 3;
	levelType = "letrasMinusculas";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();
	rodadaAtual = 0;
	showInstrucoesMinusculasModal();

}

function atualizarFaseMinusculas() {
	attGameUI();

	
	var setaDireita =  reg.modal.getModalItem("instrucoesMinusculas", 5);
	var setaEsquerda = reg.modal.getModalItem("instrucoesMinusculas", 4);

	if (setaDireita.input.pointerOver()) {
		game.add.tween(setaDireita.scale).to({
			x: 1.1,
			y: 1.1,
		}, 100, Phaser.Easing.Linear.None, true);
	} else {
		game.add.tween(setaDireita.scale).to({
			x: 1,
			y: 1
		}, 100, Phaser.Easing.Linear.None, true);
	}

	if (setaEsquerda.input.pointerOver()) {
		game.add.tween(setaEsquerda.scale).to({
			x: 1.1,
			y: 1.1,
		}, 100, Phaser.Easing.Linear.None, true);
	} else {
		game.add.tween(setaEsquerda.scale).to({
			x: 1,
			y: 1
		}, 100, Phaser.Easing.Linear.None, true);
	}
}