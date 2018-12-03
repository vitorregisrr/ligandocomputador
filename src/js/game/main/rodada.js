function novaRodada(venceu) {
    if (venceu) {
        rodadaAtual++;
    }
    if (rodadaAtual != 6) {
        rodada = {
            pecasArr: bancoCombinacoes[levelType][rodadaAtual][0],
            corretoArr: bancoCombinacoes[levelType][rodadaAtual][1],
            entradaArr: [undefined, undefined, undefined, undefined, undefined]
        };
        criaPecas();
        textoFase.setText(rodadaAtual+1+'/6');
    } else {
        levelSuccess();
    }

    if(rodadaAtual == 5){
        sounds.play('ultima_fase');
    }
}