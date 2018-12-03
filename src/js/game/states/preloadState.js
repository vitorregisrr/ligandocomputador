var preloadState = {
    create: criarPreload,
    preload: precarregarPreload
}

function precarregarPreload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = "#ffffff";

    var logo = game.add.sprite(game.world.centerX, game.world.centerY - 80, 'logoPreload');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;
    logo.scale.setTo(0.8, 0.8);

    var preloadBarBg = game.add.sprite(game.world.centerX, game.world.centerY + 40, 'preloadBarBg');
    preloadBarBg.enableBody = true;
    preloadBarBg.anchor.x = 0.5;
    preloadBarBg.anchor.y = 0.5;


    preloadBar = game.add.sprite(game.world.centerX - 170, game.world.centerY - 4 + 40, 'preloadBar');
    this.load.setPreloadSprite(preloadBar);

    game.load.spritesheet('btnNivel1', 'assets/btnNivel1.png', 202, 285, 3);
    game.load.spritesheet('btnNivel2', 'assets/btnNivel2.png', 202, 285, 3);
    game.load.spritesheet('btnNivel3', 'assets/btnNivel3.png', 202, 285, 3);
    game.load.spritesheet('btnNivel4', 'assets/btnNivel4.png', 202, 285, 3);
    game.load.image('logoGrande', 'assets/logoGrande.png');
    game.load.image('logoPequeno', 'assets/logoPequeno.png');
    game.load.image('logoEditora', 'assets/logoEditora.png');
    game.load.spritesheet('btnSom', 'assets/btnSom.png', 60, 54);
    game.load.image('btnClose', 'assets/btnClose.png');
    game.load.image('backgroundNormal', 'assets/backgroundNormal.png');
    game.load.spritesheet('backgroundFase', 'assets/backgroundFase.png', 1000, 800, 2);
    game.load.image('verso_carta', 'assets/verso_carta.png');
    game.load.image('sairSim', 'assets/sairSim.png');
    game.load.image('fundoInstrucoes', 'assets/fundoInstrucoes.png');
    game.load.spritesheet('instrucoesLetrasMinusculas', 'assets/instrucoesLetrasMinusculas.png', 926, 572, 2);
    game.load.spritesheet('instrucoesLetrasMaiusculas', 'assets/instrucoesLetrasMaiusculas.png', 926, 572, 2);
    game.load.spritesheet('instrucoesMeses', 'assets/instrucoesMeses.png', 926, 572, 2);
    game.load.spritesheet('instrucoesNumeros', 'assets/instrucoesNumeros.png', 926, 572, 2);
    game.load.image('sairNao', 'assets/sairNao.png');
    game.load.image('iniciar', 'assets/iniciar.png');
    game.load.image('setaEsquerda', 'assets/setaEsquerda.png');
    game.load.image('setaDireita', 'assets/setaDireita.png');
    game.load.image('modalSair', 'assets/modalSair.png');
    game.load.spritesheet('circuito', 'assets/circuito.png', 976, 286, 2);
    game.load.image('venceuFase', 'assets/venceuFase.png');
    game.load.image('perdeuFase', 'assets/perdeuFase.png');
    game.load.image('fundoPecas', 'assets/fundoPecas.png');
    game.load.image('tentarNovamente', 'assets/tentarNovamente.png');
    game.load.image('proximoNivel', 'assets/proximoNivel.png');
    game.load.image('venceuNivel', 'assets/venceuNivel.png');
    game.load.image('proximoDesafio', 'assets/proximoDesafio.png');
    game.load.image('estatisticas', 'assets/estatisticas.png');
    game.load.spritesheet('lampada', 'assets/lampada.png', 70, 103, 2);
    game.load.audiosprite('sfx', ['assets/sounds/spriteJson/sprite.ogg', 'assets/sounds/spriteJson/sprite.m4a'], null, sfxJson);

    game.load.image('peca_0', 'assets/peca_0.png');
    game.load.image('peca_1', 'assets/peca_1.png');
    game.load.image('peca_2', 'assets/peca_2.png');
    game.load.image('peca_3', 'assets/peca_3.png');
    game.load.image('peca_4', 'assets/peca_4.png');
    game.load.image('peca_5', 'assets/peca_5.png');
    game.load.image('peca_6', 'assets/peca_6.png');
    game.load.image('peca_7', 'assets/peca_7.png');
    game.load.image('peca_8', 'assets/peca_8.png');
    game.load.image('peca_9', 'assets/peca_9.png');
    game.load.image('peca_10', 'assets/peca_10.png');

    game.load.image('peca_AM', 'assets/peca_AM.png');
    game.load.image('peca_BM', 'assets/peca_BM.png');
    game.load.image('peca_CM', 'assets/peca_CM.png');
    game.load.image('peca_DM', 'assets/peca_DM.png');
    game.load.image('peca_EM', 'assets/peca_EM.png');
    game.load.image('peca_FM', 'assets/peca_FM.png');
    game.load.image('peca_GM', 'assets/peca_GM.png');
    game.load.image('peca_HM', 'assets/peca_HM.png');
    game.load.image('peca_IM', 'assets/peca_IM.png');
    game.load.image('peca_JM', 'assets/peca_JM.png');
    game.load.image('peca_KM', 'assets/peca_KM.png');
    game.load.image('peca_LM', 'assets/peca_LM.png');
    game.load.image('peca_MM', 'assets/peca_MM.png');
    game.load.image('peca_NM', 'assets/peca_NM.png');
    game.load.image('peca_OM', 'assets/peca_OM.png');
    game.load.image('peca_PM', 'assets/peca_PM.png');
    game.load.image('peca_QM', 'assets/peca_QM.png');
    game.load.image('peca_RM', 'assets/peca_RM.png');
    game.load.image('peca_SM', 'assets/peca_SM.png');
    game.load.image('peca_TM', 'assets/peca_TM.png');
    game.load.image('peca_UM', 'assets/peca_UM.png');
    game.load.image('peca_VM', 'assets/peca_VM.png');
    game.load.image('peca_WM', 'assets/peca_WM.png');
    game.load.image('peca_XM', 'assets/peca_XM.png');
    game.load.image('peca_YM', 'assets/peca_YM.png');
    game.load.image('peca_ZM', 'assets/peca_ZM.png');

    game.load.image('peca_a', 'assets/peca_a.png');
    game.load.image('peca_b', 'assets/peca_b.png');
    game.load.image('peca_c', 'assets/peca_c.png');
    game.load.image('peca_d', 'assets/peca_d.png');
    game.load.image('peca_e', 'assets/peca_e.png');
    game.load.image('peca_f', 'assets/peca_f.png');
    game.load.image('peca_g', 'assets/peca_g.png');
    game.load.image('peca_h', 'assets/peca_h.png');
    game.load.image('peca_i', 'assets/peca_i.png');
    game.load.image('peca_j', 'assets/peca_m.png');
    game.load.image('peca_k', 'assets/peca_k.png');
    game.load.image('peca_l', 'assets/peca_l.png');
    game.load.image('peca_m', 'assets/peca_m.png');
    game.load.image('peca_n', 'assets/peca_n.png');
    game.load.image('peca_o', 'assets/peca_o.png');
    game.load.image('peca_p', 'assets/peca_p.png');
    game.load.image('peca_q', 'assets/peca_q.png');
    game.load.image('peca_r', 'assets/peca_r.png');
    game.load.image('peca_s', 'assets/peca_s.png');
    game.load.image('peca_t', 'assets/peca_t.png');
    game.load.image('peca_u', 'assets/peca_u.png');
    game.load.image('peca_v', 'assets/peca_v.png');
    game.load.image('peca_w', 'assets/peca_w.png');
    game.load.image('peca_x', 'assets/peca_x.png');
    game.load.image('peca_y', 'assets/peca_y.png');
    game.load.image('peca_z', 'assets/peca_z.png');

    game.load.image('peca_janeiro', 'assets/peca_janeiro.png');
    game.load.image('peca_fevereiro', 'assets/peca_fevereiro.png');
    game.load.image('peca_marco', 'assets/peca_marco.png');
    game.load.image('peca_maio', 'assets/peca_maio.png');
    game.load.image('peca_abril', 'assets/peca_abril.png');
    game.load.image('peca_junho', 'assets/peca_junho.png');
    game.load.image('peca_julho', 'assets/peca_julho.png');
    game.load.image('peca_agosto', 'assets/peca_agosto.png');
    game.load.image('peca_outubro', 'assets/peca_outubro.png');
    game.load.image('peca_setembro', 'assets/peca_setembro.png');
    game.load.image('peca_novembro', 'assets/peca_novembro.png');
    game.load.image('peca_dezembro', 'assets/peca_dezembro.png');
}


function criarPreload() {
    game.state.start('levelState');
}