function createModals() {

    reg.modal.createModal({
        type: "gameOverModal",
        includeBackground: false,
        modalCloseOnInput: false,
        itemsArr: [{
                type: "image",
                content: "perdeuFase",
                offsetY: -20,
                contentScale: 1
            },
            {
                type: "image",
                content: "sairSim",
                offsetY: 50,
                offsetX: 100,
                callback: function () {
                    game.paused = false;
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "gameSucessModal",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
            type: "image",
            content: "venceuFase",
            offsetY: -20,
            contentScale: 1
        },
        {
            type: "image",
            content: "sairSim",
            offsetY: 50,
            offsetX: 100,
            callback: function () {
                game.paused = false;
            }
        },]
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
    reg.modal.showModal("gameOverModal");
    background.frame = 1;
    game.paused = true;
}

function showModalSair() {
    reg.modal.showModal("modalSair");
}

function showGameSucessModal() {
    reg.modal.showModal("gameSucessModal");
    background.frame = 1;
    game.paused = true;
}


function showPausedModal() {
    game.paused = true;
    reg.modal.showModal("pausedModal");
}