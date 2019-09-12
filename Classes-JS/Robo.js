class Robo {
    constructor(graficosCenario, linhaInicial, colunaInicial) {
        this.linha = linhaInicial;
        this.coluna = colunaInicial;

        this.mensagem = graficosCenario.append("text")
            .attr("x", cons["X_MENSAGEM"] + cons["ESPACAMENTO_X"]*colunaInicial)
            .attr("y", cons["Y_MENSAGEM"] + cons["ESPACAMENTO_Y"]*linhaInicial)
            .attr("text-anchor", "middle");
        this.mensagem.text("Ola");

        this.graficos = graficosCenario.append("rect")
            .attr("x", cons["X_ROBO"] + cons["ESPACAMENTO_X"]*colunaInicial)
            .attr("y", cons["Y_ROBO"] + cons["ESPACAMENTO_Y"]*linhaInicial)
            .attr("width", cons["LARGURA_ROBO"])
            .attr("height", cons["ALTURA_ROBO"])
            .attr("fill", cons["COR_ROBO"]);
    }

    deslocarRobo() {
        var novoX = cons["X_ROBO"] + cons["ESPACAMENTO_X"]*this.coluna;
        var novoY = cons["Y_ROBO"] + cons["ESPACAMENTO_Y"]*this.linha;
        this.graficos
            .transition()
            .attr("x", novoX)
            .attr("y", novoY)
            .duration(cons["DURACAO_MOVIMENTO"]);
    }

    deslocarMensagem() {
        var novoX = cons["X_MENSAGEM"] + cons["ESPACAMENTO_X"]*this.coluna;
        var novoY = cons["Y_MENSAGEM"] + cons["ESPACAMENTO_Y"]*this.linha;
        this.mensagem
            .transition()
            .attr("x", novoX)
            .attr("y", novoY)
            .duration(cons["DURACAO_MOVIMENTO"]);
    }

    mover(direcao) {
        switch (direcao) {
            case "CIMA":
                this.linha -= 1;
                break;
            case "BAIXO":
                this.linha += 1;
                break;
            case "DIREITA":
                this.coluna += 1;
                break;
            case "ESQUERDA":
                this.coluna -= 1;
                break;
            default:
                alert("ERRO AO TENTAR MOVER");
        }
        this.deslocarRobo();
        this.deslocarMensagem();
    }
}