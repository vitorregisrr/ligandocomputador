var faseMeses = {
	create: criarFaseMeses,
	update: atualizarFaseMeses,
};

function criarFaseMeses() {
	createModals();
	sounds.gen();
	erros = 0;
	acertos = 0;
	levelNumber = 4;
	levelType = "meses";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();
	rodadaAtual = 0;
	showInstrucoesMesesModal();

}

function atualizarFaseMeses() {
	attGameUI();
}