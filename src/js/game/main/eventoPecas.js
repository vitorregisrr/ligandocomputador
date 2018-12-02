function pecaSolta(peca) {
    if (false) {

    } else {
        peca.x = posPecas[peca.posicao][0];
        peca.y = posPecas[peca.posicao][1];
    }
}

function criaPecas() {

    pecas = game.add.group();

    posPecas = [
        [124, 310],
        [299, 310],
        [477, 310],
        [645, 310],
        [822.5, 310]
    ];
    for (x = 0; x <= rodada.pecasArr.length - 1; x++) {
        //var peca = game.add.sprite(posPecas[x][0], posPecas[x][1], 'peca_' + rodada.pecasArr[x]);
        var peca = game.add.sprite(posPecas[x][0], posPecas[x][1], 'verso_carta');
        peca.posicao = x;
        peca.valor = rodada.pecasArr[x];
        peca.scale.setTo(0.8, 0.8);
        peca.frame = 1;

        peca.anchor.set(0.5);
        peca.isFlipping = false;
        pecas.add(peca);

    }

    game.time.events.add(Phaser.Timer.SECOND * 2, function () {
        
        pecas.forEach(function (peca) {
            peca.inputEnabled = true;
            peca.input.enableDrag(true);
            peca.events.onDragStop.add(pecaSolta, this);

            peca.flipTween = game.add.tween(peca.scale).to({
                x: 0,
                y: 1.2
            }, 200 / 2, Phaser.Easing.Linear.None);

            peca.flipTween.onComplete.add(function () {
                peca.frame = 0;
                peca.backFlipTween.start();
            }, this);

            peca.backFlipTween = game.add.tween(peca.scale).to({
                x: 0.8,
                y: 0.8
            }, 200 / 2, Phaser.Easing.Linear.None);

            peca.flipTween.start();
        });

    }, this);

}