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
}