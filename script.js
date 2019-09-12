var graficosCenario = d3.select("#cenario");

c = new Cenario(graficosCenario, 3, 3);

var cont = 0;
var lala = {0:"DIREITA", 1:"BAIXO", 2:"ESQUERDA", 3:"CIMA"};

function atualizar() {
    c.robo.mover(lala[cont]);
    cont++;
    if(cont == 4) {
        cont = 0;
    }
}

atualizar();
//Chama a funcao atualizar a cada x milisegundos
setInterval(atualizar, 2000);
