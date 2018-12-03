var faseMaiusculas = {
	create: criarFaseMaiusculas,
	update: atualizarFaseMaiusculas,
};

function criarFaseMaiusculas() {
	createModals();
	erros = 0;
	acertos = 0;
	levelNumber = 2;
	levelType = "letrasMaiusculas";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();
	rodadaAtual = 0;
	novaRodada();
	showInstrucoesMaiusculasModal();

}

function atualizarFaseMaiusculas() {
	attGameUI();
}