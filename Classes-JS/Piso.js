class Piso {
    constructor(graficosCenario, linha, coluna) {
        this.estahSujo = true;
        this.graficos = graficosCenario.append("rect")
            .attr("x", cons["X_PISO"] + cons["ESPACAMENTO_X"]*coluna)
            .attr("y", cons["Y_PISO"] + cons["ESPACAMENTO_Y"]*linha)
            .attr("width", cons["LARGURA_PISO"])
            .attr("height", cons["ALTURA_PISO"])
            .attr("fill", cons["COR_PISO"]);
    }
}
