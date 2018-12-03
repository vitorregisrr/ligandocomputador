function createModals() {

    reg.modal.createModal({
        type: "gameOverModal",
        includeBackground: false,
        modalCloseOnInput: false,
        itemsArr: [{
                type: "image",
                content: "perdeuFase",
                offsetY: -90,
                contentScale: 1
            },
            {
                type: "image",
                content: "tentarNovamente",
                offsetY: 10,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("gameOverModal");
                    background.frame = 0;
                    pecas.destroy();
                    placeholders.destroy();
                    novaRodada(false);
                    circuito.frame = 0;
                    erros++;
                    textoErros.setText(erros);
                    sounds.play('cliqueinstrucoes');
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "gameSucessModal",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "venceuFase",
                offsetY: -90,
                contentScale: 1
            },
            {
                type: "image",
                content: "proximoNivel",
                offsetY: 10,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("gameSucessModal");
                    background.frame = 0;
                    pecas.destroy();
                    placeholders.destroy();
                    novaRodada(true);
                    acertos++;
                    textoAcertos.setText(acertos);
                    sounds.play('cliqueinstrucoes');
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "nivelSuccess",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "venceuNivel",
                offsetY: -20,
                contentScale: 1
            },
            {
                type: "image",
                content: "proximoNivel",
                offsetY: 90,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("nivelSuccess");
                    background.frame = 0;
                    game.state.start('levelState');
                    sounds.play('cliqueinstrucoes');
                }
            },
        ]
    })

    reg.modal.createModal({
        type: "modalSair",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "modalSair",
                offsetY: -20,
                contentScale: 1,
            },
            {
                type: "image",
                content: "sairSim",
                offsetY: 50,
                offsetX: 100,
                callback: function () {
                    game.paused = false;
                    game.state.start('levelState');
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "image",
                content: "sairNao",
                offsetY: 50,
                offsetX: -100,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("modalSair");
                    sounds.play('cliqueinstrucoes');
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "instrucoesNumeros",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "fundoInstrucoes",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "sprite",
                frame: 0,
                content: "instrucoesNumeros",
                offsetY: 0,
                offsetX: 0,
                callback: function () {}
            },
            {
                type: "sprite",
                content: "setaEsquerda",
                offsetY: -30,
                offsetX: -400,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(0, 'instrucoesNumeros', 3);
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "sprite",
                content: "setaDireita",
                offsetY: -30,
                offsetX: 390,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(1, 'instrucoesNumeros', 3);
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "sprite",
                content: "iniciar",
                offsetY: 260,
                offsetX: 0,
                contentScale: 1,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("instrucoesNumeros");
                    game.sound.stopAll();
                    if(soundLoop){
                        clearInterval(soundLoop);
                    }
                    sounds.play('musicajogo');
                    soundLoop = setInterval(function () {
                        sounds.play('musicajogo');
                    }, 150000);
                    novaRodada();
                }
            }
        ]
    });

    reg.modal.createModal({
        type: "instrucoesMaiusculas",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "fundoInstrucoes",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "sprite",
                frame: 0,
                content: "instrucoesLetrasMaiusculas",
                offsetY: -20,
                offsetX: 0,
                callback: function () {}
            },
            {
                type: "sprite",
                content: "setaEsquerda",
                offsetY: -30,
                offsetX: -400,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(0, 'instrucoesMaiusculas', 3);
                }
            },
            {
                type: "sprite",
                content: "setaDireita",
                offsetY: -30,
                offsetX: 390,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(1, 'instrucoesMaiusculas', 3);
                }
            },
            {
                type: "sprite",
                content: "iniciar",
                offsetY: 260,
                offsetX: 0,
                contentScale: 1,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("instrucoesMaiusculas");
                    game.sound.stopAll();
                    if(soundLoop){
                        clearInterval(soundLoop);
                    }
                    sounds.play('musicajogo');
                    soundLoop = setInterval(function () {
                        sounds.play('musicajogo');
                    }, 150000);
                    novaRodada();
                }
            }
        ]
    });
    reg.modal.createModal({
        type: "instrucoesMinusculas",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "fundoInstrucoes",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "sprite",
                frame: 0,
                content: "instrucoesLetrasMinusculas",
                offsetY: -20,
                offsetX: 0,
                callback: function () {}
            },
            {
                type: "sprite",
                content: "setaEsquerda",
                offsetY: -30,
                offsetX: -400,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(0, 'instrucoesMinusculas', 3);
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "sprite",
                content: "setaDireita",
                offsetY: -30,
                offsetX: 390,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(1, 'instrucoesMinusculas', 3);
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "sprite",
                content: "iniciar",
                offsetY: 260,
                offsetX: 0,
                contentScale: 1,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("instrucoesMinusculas");
                    game.sound.stopAll();
                    if(soundLoop){
                        clearInterval(soundLoop);
                    }
                    sounds.play('musicajogo');
                    soundLoop = setInterval(function () {
                        sounds.play('musicajogo');
                    }, 150000);
                    novaRodada();
                    sounds.play('cliqueinstrucoes');
                }
            }
        ]
    });

    reg.modal.createModal({
        type: "instrucoesMeses",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "fundoInstrucoes",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "sprite",
                frame: 0,
                content: "instrucoesMeses",
                offsetY: -20,
                offsetX: 0,
                callback: function () {}
            },
            {
                type: "sprite",
                content: "setaEsquerda",
                offsetY: -30,
                offsetX: -400,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(0, 'instrucoesMeses', 3);
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "sprite",
                content: "setaDireita",
                offsetY: -30,
                offsetX: 390,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(1, 'instrucoesMeses', 3);
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "sprite",
                content: "iniciar",
                offsetY: 260,
                offsetX: 0,
                contentScale: 1,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("instrucoesMeses");
                    game.sound.stopAll();
                    if(soundLoop){
                        clearInterval(soundLoop);
                    }
                    sounds.play('musicajogo');
                    soundLoop = setInterval(function () {
                        sounds.play('musicajogo');
                    }, 150000);
                    novaRodada();
                    sounds.play('cliqueinstrucoes');
                }
            }
        ]
    });
}


function showGameOverModal() {
    reg.modal.showModal("gameOverModal");
    background.frame = 1;
}

function showInstrucoesNumerosModal() {
    reg.modal.showModal("instrucoesNumeros");
    game.sound.stopAll();
    btnSom.bringToTop();
    if(soundLoop){
		clearInterval(soundLoop);
	}
    sounds.play('musicainstrucoes');
    soundLoop = setInterval(function () {
        sounds.play('musicainstrucoes');
    }, 144000);
}

function showInstrucoesMaiusculasModal() {
    reg.modal.showModal("instrucoesMaiusculas");
    game.sound.stopAll();
    btnSom.bringToTop();
    if(soundLoop){
		clearInterval(soundLoop);
	}
    sounds.play('musicainstrucoes');
    soundLoop = setInterval(function () {
        sounds.play('musicainstrucoes');
    }, 144000);
}

function showInstrucoesMinusculasModal() {
    reg.modal.showModal("instrucoesMinusculas");
    game.sound.stopAll();
    btnSom.bringToTop();
    if(soundLoop){
		clearInterval(soundLoop);
	};
    soundLoop = setInterval(function () {
        sounds.play('musicainstrucoes');
    }, 144000);
}

function showInstrucoesMesesModal() {
    reg.modal.showModal("instrucoesMeses");
    game.sound.stopAll();
    btnSom.bringToTop();
    if(soundLoop){
		clearInterval(soundLoop);
	}
    sounds.play('musicainstrucoes');
    soundLoop = setInterval(function () {
        sounds.play('musicainstrucoes');
    }, 144000);
}

function showModalSair() {
    game.paused = true;
    reg.modal.showModal("modalSair");
    btnSom.bringToTop();
}

function showNivelSuccessModal() {
    reg.modal.showModal("nivelSuccess");
    btnSom.bringToTop();
}

function showGameSucessModal() {
    reg.modal.showModal("gameSucessModal");
    btnSom.bringToTop();
    background.frame = 1;
}
