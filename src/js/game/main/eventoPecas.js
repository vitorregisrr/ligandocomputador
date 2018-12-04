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

        game.add.tween(peca.scale).to({
            x: 0.75,
            y: 0.75
        }, 200, Phaser.Easing.Linear.None, true);

    } else {
        peca.x = posPecas[peca.posicao][0];
        peca.y = posPecas[peca.posicao][1];

        game.add.tween(peca.scale).to({
            x: 0.9,
            y: 0.9
        }, 200, Phaser.Easing.Linear.None, true);

        placeholders.forEach(function (placeholder) {
            if (placeholder.peca == peca) {
                placeholder.peca = undefined;
                rodada.entradaArr[placeholder.posicao] = undefined;
            }
        });
    }

    //checa se já está completado e se já ganhou
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
                pecas.forEach(function (peca) {
                    peca.flipTween = game.add.tween(peca.scale).to({
                        x: 0,
                        y: 1.2
                    }, 500 / 2, Phaser.Easing.Linear.None);
        
                    var fix = levelType == "letrasMaiusculas" ? fix = "M" : fix = "";
                    peca.flipTween.onComplete.add(function () {
                        peca.loadTexture('peca_'+peca.valor+fix)
                        peca.backFlipTween.start();
                    }, this);
        
                    peca.backFlipTween = game.add.tween(peca.scale).to({
                        x: 0.9,
                        y: 0.9
                    }, 500 / 2, Phaser.Easing.Linear.None);
        
                    peca.flipTween.start();
                });
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
        [140, 622],
        [297, 622],
        [456, 621],
        [612, 623],
        [770, 623]
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
        [122, 317],
        [299, 317],
        [482, 317],
        [656, 317],
        [829, 317]
    ];

    for (x = 0; x <= rodada.pecasArr.length - 1; x++) {
        //var peca = game.add.sprite(posPecas[x][0], posPecas[x][1], 'peca_' + rodada.pecasArr[x]);
        var peca = game.add.sprite(posPecas[x][0], posPecas[x][1], 'verso_carta');
        peca.posicao = x;
        peca.valor = rodada.pecasArr[x];
        peca.scale.setTo(0.9, 0.9);
        peca.frame = 1;

        peca.anchor.set(0.5);
        peca.isFlipping = false;
        pecas.add(peca);
        text = game.add.text(0, 0, peca.valor, {
            fill: "#fff",
        });
        text.alpha = 0;
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
    textoContagem = game.add.text(470, 100, 'Contagem regressiva!', {
        fill: "#fff",
        fontSize: "30px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2,
    });
    textoContagem.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    textoContagem.alpha = 0;

    var cont = 10;
    cronometro = game.time.events.add(Phaser.Timer.SECOND * 3, function () {
        pecas.forEach(function (peca) {
            peca.flipTween = game.add.tween(peca.scale).to({
                x: 0,
                y: 1.2
            }, 200 / 2, Phaser.Easing.Linear.None);

            var fix = levelType == "letrasMaiusculas" ? fix = "M" : fix = "";
            peca.flipTween.onComplete.add(function () {
                peca.loadTexture('peca_'+peca.valor+fix)
                peca.backFlipTween.start();
            }, this);

            peca.backFlipTween = game.add.tween(peca.scale).to({
                x: 0.9,
                y: 0.9
            }, 200 / 2, Phaser.Easing.Linear.None);

            peca.flipTween.start();
        });
        sounds.play('cronometro');
        cronometro = game.time.events.loop(Phaser.Timer.SECOND * 1, function () {
            cont--;
            textoCronometro.text = cont;
            textoCronometro.alpha = 1;
            textoContagem.alpha = 1;
            if (cont == 0) {
                game.time.events.remove(cronometro);
                textoCronometro.destroy();
                textoContagem.destroy();

                pecas.forEach(function (peca) {
                    peca.inputEnabled = true;
                    peca.input.enableDrag(true);
                    peca.events.onDragStop.add(pecaSolta, this);
                    peca.events.onDragStart.add(function () {
                        game.add.tween(peca.scale).to({
                            x: 0.9,
                            y: 0.9
                        }, 200, Phaser.Easing.Linear.None, true);
                        sounds.play('cliqueinstrucoes');
                    }, this);

                    peca.flipTween = game.add.tween(peca.scale).to({
                        x: 0,
                        y: 1.2
                    }, 200 / 2, Phaser.Easing.Linear.None);

                    peca.flipTween.onComplete.add(function () {
                        peca.loadTexture('verso_carta')
                        peca.backFlipTween.start();
                    }, this);

                    peca.backFlipTween = game.add.tween(peca.scale).to({
                        x: 0.9,
                        y: 0.9
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