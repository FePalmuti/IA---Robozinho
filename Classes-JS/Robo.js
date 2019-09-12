class Robo {
    constructor(graficosCenario, linhaInicial, colunaInicial) {
        this.linha = linhaInicial;
        this.coluna = colunaInicial;

        this.mensagem = graficosCenario.append("text")
            .attr("x", cons["X_MENSAGEM"] + cons["ESPACAMENTO_X"]*colunaInicial)
            .attr("y", cons["Y_MENSAGEM"] + cons["ESPACAMENTO_Y"]*linhaInicial)
            .attr("text-anchor", "middle");
        this.mensagem.text("");

        this.graficos = graficosCenario.append("rect")
            .attr("x", cons["X_ROBO"] + cons["ESPACAMENTO_X"]*colunaInicial)
            .attr("y", cons["Y_ROBO"] + cons["ESPACAMENTO_Y"]*linhaInicial)
            .attr("width", cons["LARGURA_ROBO"])
            .attr("height", cons["ALTURA_ROBO"])
            .attr("fill", cons["COR_ROBO"]);

        this.lerProbabilidadesHTML();
    }

    setMensagem(mensagem) {
        this.mensagem.text(mensagem);
    }

    lerProbabilidadesHTML() {
        var qntCima = d3.select("#CIMA").text();
        var qntBaixo = d3.select("#BAIXO").text();
        var qntDireita = d3.select("#DIREITA").text();
        var qntEsquerda = d3.select("#ESQUERDA").text();
        var total = d3.select("#TOTAL").text();

        this.probabilidades = {
            cima : qntCima / total,
            baixo : qntBaixo / total,
            direita : qntDireita / total,
            esquerda : qntEsquerda / total
        };
    }

    incrementarLabel(id) {
        var label = d3.select(id);
        var qnt = parseInt(label.text());
        qnt++;
        label.text(qnt);
    }

    contabilizarLimpeza() {
        if(this.linha == 0) {
            //Aumenta a probabilidade de ir pra cima
            this.incrementarLabel("#CIMA");
            this.incrementarLabel("#TOTAL");
        }
        else if(this.linha == 2) {
            //Aumenta a probabilidade de ir pra baixo
            this.incrementarLabel("#BAIXO");
            this.incrementarLabel("#TOTAL");
        }
        if(this.coluna == 2) {
            //Aumenta a probabilidade de ir pra direita
            this.incrementarLabel("#DIREITA");
            this.incrementarLabel("#TOTAL");
        }
        else if(this.coluna == 0) {
            //Aumenta a probabilidade de ir pra esquerda
            this.incrementarLabel("#ESQUERDA");
            this.incrementarLabel("#TOTAL");
        }
        this.lerProbabilidadesHTML();
    }

    definirProximoMovimento() {
        //Numero aleatorio de 0 a 1 (exclusive)
        var numAleatorio = Math.random();
        var intervalo1 = this.probabilidades["cima"];
        var intervalo2 = intervalo1 + this.probabilidades["baixo"];
        var intervalo3 = intervalo2 + this.probabilidades["direita"];
        var intervalo4 = intervalo3 + this.probabilidades["esquerda"];

        if(numAleatorio < intervalo1) {
            return "CIMA";
            alert(intervalo1);
        }
        else if(numAleatorio < intervalo2) {
            return "BAIXO";
            alert(intervalo2);
        }
        else if(numAleatorio < intervalo3) {
            return "DIREITA";
            alert(intervalo3);
        }
        else if(numAleatorio < intervalo4) {
            return "ESQUERDA";
            alert(intervalo4);
        }
        else {
            alert("ERRO AO TENTAR DEFINIR MOVIMENTO");
        }
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
        switch(direcao) {
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
        }
        this.deslocarRobo();
        this.deslocarMensagem();
    }
}
