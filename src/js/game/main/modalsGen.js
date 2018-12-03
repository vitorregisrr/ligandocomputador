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
                offsetY: 20,
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
                offsetY: 20,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("gameSucessModal");
                    background.frame = 0;
                    pecas.destroy();
                    placeholders.destroy();
                    novaRodada(true);
                    acertos++;
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
                callback: function () {
                }
            },
            {
                type: "sprite",
                content: "setaEsquerda",
                offsetY: -30,
                offsetX: -400,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(0, 'instrucoesNumeros', 3);
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
                callback: function () {
                }
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
                callback: function () {
                }
            },
            {
                type: "sprite",
                content: "setaEsquerda",
                offsetY: -30,
                offsetX: -400,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(0, 'instrucoesMinusculas', 3);
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
                callback: function () {
                }
            },
            {
                type: "sprite",
                content: "setaEsquerda",
                offsetY: -30,
                offsetX: -400,
                contentScale: 1,
                callback: function () {
                    reg.modal.updateModalValue(0, 'instrucoesMeses', 3);
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
                }
            }
        ]
    });
}


function showGameOverModal() {
    game.paused = true;
    reg.modal.showModal("gameOverModal");
    background.frame = 1;
}

function showInstrucoesNumerosModal() {
    game.paused = true;
    reg.modal.showModal("instrucoesNumeros");
}
function showInstrucoesMaiusculasModal() {
    game.paused = true;
    reg.modal.showModal("instrucoesMaiusculas");
}
function showInstrucoesMinusculasModal() {
    game.paused = true;
    reg.modal.showModal("instrucoesMinusculas");
}
function showInstrucoesMesesModal() {
    game.paused = true;
    reg.modal.showModal("instrucoesMeses");
}

function showModalSair() {
    reg.modal.showModal("modalSair");
}

function showNivelSuccessModal() {
    reg.modal.showModal("nivelSuccess");
}

function showGameSucessModal() {
    game.paused = true;
    reg.modal.showModal("gameSucessModal");
    background.frame = 1;
}


function showPausedModal() {
    game.paused = true;
    reg.modal.showModal("pausedModal");
}