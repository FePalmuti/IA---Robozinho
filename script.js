function ehMovimentoValido(direcao) {
    switch(direcao) {
        case "CIMA":
            if(c.robo.linha - 1 < 0) {
                return false;
            }
            break;
        case "BAIXO":
            if(c.robo.linha + 1 >= c.nLinhas) {
                return false;
            }
            break;
        case "DIREITA":
            if(c.robo.coluna + 1 >= c.nColunas) {
                return false;
            }
            break;
        case "ESQUERDA":
            if(c.robo.coluna - 1 < 0) {
                return false;
            }
            break;
    }
    return true;
}

function atualizar() {
    if(c.matrizPisos[c.robo.linha][c.robo.coluna].estahSujo) {
        c.robo.setMensagem("Limpando");
        c.matrizPisos[c.robo.linha][c.robo.coluna].ficarLimpo();
    }
    else {
        c.robo.setMensagem("");
        var encontrouMovimentoValido = false;
        while(!encontrouMovimentoValido) {
            var direcao = c.robo.definirProximoMovimento();
            if(ehMovimentoValido(direcao)) {
                encontrouMovimentoValido = true;
            }
        }
        c.robo.mover(direcao);
    }
}

var graficosCenario = d3.select("#cenario");

c = new Cenario(graficosCenario, 3, 3);

atualizar();
//Chama a funcao atualizar a cada x milisegundos
setInterval(atualizar, 2000);
