var faseMeses = {
	create: criarFaseMeses,
	update: atualizarFaseMeses,
};

function criarFaseMeses() {
	createModals();
	erros = 0;
	acertos = 0;
	levelNumber = 4;
	levelType = "meses";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();

	rodadaAtual = 0;

	novaRodada();

}

function atualizarFaseMeses() {
	attGameUI();
}