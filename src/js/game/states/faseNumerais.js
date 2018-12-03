var faseNumerais = {
	create: criarFaseNumerais,
	update: atualizarFaseNumerais,
};

function criarFaseNumerais() {
	createModals();
	sounds.gen();
	erros = 0;
	acertos = 0;
	levelNumber = 1;
	levelType = "numeros";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();
	rodadaAtual = 0;
	showInstrucoesNumerosModal()

}

function atualizarFaseNumerais() {
	attGameUI();

	
	var setaDireita =  reg.modal.getModalItem("instrucoesNumeros", 5);
	var setaEsquerda = reg.modal.getModalItem("instrucoesNumeros", 4);

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