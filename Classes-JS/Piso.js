class Piso {
    constructor(graficosCenario, linha, coluna) {
        this.estahSujo = false;
        //No momento da especificacao do "on click", a palavra "this" deixa de
        //fazer referencia a classe Piso. Por isso dessa atribuicao bizarra.
        var piso = this;
        this.graficos = graficosCenario.append("rect")
            .attr("x", cons["X_PISO"] + cons["ESPACAMENTO_X"]*coluna)
            .attr("y", cons["Y_PISO"] + cons["ESPACAMENTO_Y"]*linha)
            .attr("width", cons["LARGURA_PISO"])
            .attr("height", cons["ALTURA_PISO"])
            .attr("fill", cons["COR_PISO_LIMPO"])
            .on("click", function() {
                piso.ficarSujo(piso);
            })
    }

    ficarSujo(piso) {
        this.estahSujo = true;
        piso.graficos
            .transition()
            .attr("fill", cons["COR_PISO_SUJO"])
            .duration(700);
    }

    ficarLimpo() {
        this.estahSujo = false;
        this.graficos
            .transition()
            .attr("fill", cons["COR_PISO_LIMPO"])
            .duration(700);
    }
}
