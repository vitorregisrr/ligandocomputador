var faseNumerais = {
	create: criarFaseNumerais,
	update: atualizarFaseNumerais,
};

function criarFaseNumerais() {
	createModals();
	erros = 0;
	acertos = 0;
	levelNumber = 1;
	levelType = "numeros";
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();
	rodadaAtual = 0;
	novaRodada();
	showInstrucoesNumerosModal()

}

function atualizarFaseNumerais() {
	attGameUI();
}