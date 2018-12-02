function criaCircuito(){
	fundoPecas = game.add.sprite(-10, 200, 'fundoPecas');
	fundoPecas.width = 1050;

	lampadas = game.add.group();
	var posLampadas = [
		[104, 470],
		[259, 470],
		[417, 470],
		[575, 470],
		[732.5, 470]
	];

	for(x = 0; x < posLampadas.length; x++){
		var lampada = game.add.sprite(posLampadas[x][0], posLampadas[x][1], 'lampada');
        lampada.frame = 0;
        lampadas.add(lampada);
	}

	circuito = game.add.sprite(20, 420, 'circuito');	
}