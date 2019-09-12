class Cenario {
    constructor(graficosCenario, nLinhas, nColunas) {
        this.graficos = graficosCenario;
        this.nLinhas = nLinhas;
        this.nColunas = nColunas;
        this.robo = new Robo(this.graficos, 1, 1)
        this.matrizPisos = [];
        this.inicializarMatrizPisos();
    }

    inicializarMatrizPisos() {
        for(let linha = 0; linha < this.nLinhas; linha++) {
            var linhaPisos = []
            for(let coluna = 0; coluna < this.nColunas; coluna++) {
                linhaPisos.push(new Piso(this.graficos, linha, coluna));
            }
            this.matrizPisos.push(linhaPisos);
        }
    }
}
