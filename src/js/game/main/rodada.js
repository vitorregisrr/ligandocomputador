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
    } else {
        levelSuccess();
    }

}