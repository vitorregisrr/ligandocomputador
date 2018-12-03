config = {
    sounds: true
}

var sounds = {
    gen: function () {
        if (config.sounds) {
            sfx = game.add.audioSprite('sfx');
            sfx.allowMultiple = true;
        }
    },

    play: function (id) {
        if (config.sounds) {
            switch (id) {
                case 'cliqueinstrucoes':
                    sfx.play('cliqueinstrucoes');
                    break;

                case 'cronometro':
                    sfx.play('cronometro');
                    break;

                case 'encaixado':
                    sfx.play('encaixado');
                    break;

                case 'final10s':
                    sfx.play('final10s');
                    break;

                case 'musicainstrucoes':
                    sfx.play('musicainstrucoes');
                    break;

                case 'musicajogo':
                    sfx.play('musicajogo');
                    break;


                case 'parabenscompletou':
                    sfx.play('parabenscompletou');
                    break;

                case 'quepena':
                    sfx.play('quepena');
                    break;

                case 'ultima_fase':
                    sfx.play('ultima_fase');
                    break;
            }
        } else {
            return false;
        }
    }
}