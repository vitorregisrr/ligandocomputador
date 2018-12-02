var faseMinusculas = {
	create: criarFaseMinusculas,
	update: atualizarFaseMinusculas,
};

function criarFaseMinusculas() {
	createModals();
	erros = 0;
	acertos = 0;
	levelNumber = 3;
	levelType = "letrasMinusculas";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();

	rodadaAtual = 0;

	novaRodada();

}

function atualizarFaseMinusculas() {
	attGameUI();
}