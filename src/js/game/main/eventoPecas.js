function pecaSolta(peca) {
    var overlap = checkPlaceholderOverlap(peca);
    if (overlap && !overlap.peca) {
        sounds.play('cliqueinstrucoes');
        placeholders.forEach(function (placeholder) {
            if (placeholder.peca == peca) {
                placeholder.peca = undefined;
                rodada.entradaArr[placeholder.posicao] = undefined;
            }
        });

        if (overlap.peca) {
            overlap.peca.x = posPecas[overlap.peca.posicao][0];
            overlap.peca.y = posPecas[overlap.peca.posicao][1];
            overlap.peca = peca;
        }

        peca.x = overlap.x;
        peca.y = overlap.y;
        overlap.peca = peca;
        rodada.entradaArr[overlap.posicao] = peca.valor;

    } else {
        peca.x = posPecas[peca.posicao][0];
        peca.y = posPecas[peca.posicao][1];

        placeholders.forEach(function (placeholder) {
            if (placeholder.peca == peca) {
                placeholder.peca = undefined;
                rodada.entradaArr[placeholder.posicao] = undefined;
            }
        });
    }
    console.log(rodada.entradaArr);
    var cont = 0;
    rodada.entradaArr.forEach(function (item) {
        if (item != undefined) {
            cont++;
        }
    });

    if (cont == 5) {
        for (x = 0; x < rodada.entradaArr.length; x++) {
            if (Array.from(rodada.entradaArr)[x] == Array.from(rodada.corretoArr)[x]) {
                lampadas.getAt(x).frame = 1;
            }
        }

        if (rodada.entradaArr.toString() == rodada.corretoArr.toString()) {
            sounds.play('parabenscompletou');
            setTimeout(() => {
                showGameSucessModal();
                circuito.frame = 1;
            }, 3000);
            circuito.frame = 1;

            pecas.forEach(function (peca) {
                peca.input.draggable = false;
            });

        } else {
            sounds.play('quepena');
            pecas.forEach(function (peca) {
                peca.input.draggable = false;
            });
            showGameOverModal();

        }
    }

}

function criaPecas() {

    circuito.frame = 0;
    lampadas.forEach(function (lampada) {
        lampada.frame = 0;
    });

    var posPlaceHolders = [
        [146, 630],
        [295, 630],
        [456, 630],
        [616, 630],
        [774, 630]
    ];

    placeholders = game.add.group();

    for (x = 0; x < posPlaceHolders.length; x++) {
        var placeholder = game.add.sprite(posPlaceHolders[x][0], posPlaceHolders[x][1], 'verso_carta');
        placeholder.scale.setTo(0.8, 0.8);
        placeholder.posicao = x;
        placeholder.anchor.setTo(0.5, 0.5);
        placeholder.ocupado = undefined;
        placeholder.alpha = 0;
        placeholders.add(placeholder);
    }

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
        text = game.add.text(0, 0, peca.valor, {
            fill: "#fff",
        });
        peca.addChild(text);
    }

    textoCronometro = game.add.text(800, 50, peca.valor, {
        fill: "#fff",
        fontSize: "120px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2,
    });
    textoCronometro.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    textoCronometro.alpha = 0;

    var cont = 0;
    cronometro = game.time.events.add(Phaser.Timer.SECOND * 3, function () {
        pecas.forEach(function (peca) {
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
        sounds.play('cronometro');
        cronometro = game.time.events.loop(Phaser.Timer.SECOND * 1, function () {
            cont++;
            textoCronometro.text = cont;
            textoCronometro.alpha = 1;
            if (cont == 10) {
                game.time.events.remove(cronometro);
                textoCronometro.destroy();

                pecas.forEach(function (peca) {
                    peca.inputEnabled = true;
                    peca.input.enableDrag(true);
                    peca.events.onDragStop.add(pecaSolta, this);

                    peca.flipTween = game.add.tween(peca.scale).to({
                        x: 0,
                        y: 1.2
                    }, 200 / 2, Phaser.Easing.Linear.None);

                    peca.flipTween.onComplete.add(function () {
                        peca.frame == 1 ? peca.frame = 0 : peca.frame = 1;
                        peca.backFlipTween.start();
                    }, this);

                    peca.backFlipTween = game.add.tween(peca.scale).to({
                        x: 0.8,
                        y: 0.8
                    }, 200 / 2, Phaser.Easing.Linear.None);

                    peca.flipTween.start();
                    sounds.play('final10s');
                });
            }
        })
    });

}

function checkPlaceholderOverlap(peca) {

    var x = false;
    placeholders.forEach(function (e) {
        if (!x) {
            if (Phaser.Rectangle.intersects(peca, e)) {
                overlapControl = true;
                placeOverlaped = e;
                x = true;
            } else {
                overlapControl = false;
                x = false;
            }
        }
    });

    if (overlapControl) {
        return placeOverlaped;
    } else {
        return false;
    }

}