var faseMaiusculas = {
	create: criarFaseMaiusculas,
	update: atualizarFaseMaiusculas,
};

function criarFaseMaiusculas() {
	createModals();
	sounds.gen();
	erros = 0;
	acertos = 0;
	levelNumber = 2;
	levelType = "letrasMaiusculas";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();
	rodadaAtual = 0;
	showInstrucoesMaiusculasModal();

}

function atualizarFaseMaiusculas() {
	attGameUI();
}