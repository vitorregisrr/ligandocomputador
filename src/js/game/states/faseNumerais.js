var faseNumerais = {
	create: criarFaseNumerais,
	update: atualizarFaseNumerais,
};

function criarFaseNumerais() {
	createModals();

	levelNumber = 1;
	background = game.add.sprite(0, 0, 'backgroundFase');
	createGameUI();
	criaCircuito();

	rodadaAtual = 1;

	function novaRodada() {
		if (rodadaAtual != 6) {
			rodada = {
				pecasArr: bancoCombinacoes["numeros"][rodadaAtual][0],
				corretoArr: bancoCombinacoes["numeros"][rodadaAtual][1],
				entradaArr: [false, false, false, false, false]
			};
			criaPecas();
			rodadaAtual++;
		} else {
			showGameSucessModal();
		}
	}
	novaRodada();

}

function atualizarFaseNumerais() {
	attGameUI();
}