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
}


function showGameOverModal() {
    game.paused = true;
    reg.modal.showModal("gameOverModal");
    background.frame = 1;
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