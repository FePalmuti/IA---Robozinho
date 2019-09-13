var xPiso = 100;
var yPiso = 140;
var larguraPiso = 100;
var alturaPiso = 20;

var larguraRobo = 100;
var alturaRobo = 100;

var cons = {
    X_ROBO : xPiso,
    Y_ROBO : yPiso - alturaRobo - 10,
    LARGURA_ROBO : larguraRobo,
    ALTURA_ROBO : alturaRobo,
    COR_ROBO : "hsl(180, 100%, 30%)",

    X_MENSAGEM : xPiso + larguraRobo/2,
    Y_MENSAGEM : yPiso - alturaRobo - 20,

    X_PISO : xPiso,
    Y_PISO : yPiso,
    LARGURA_PISO : larguraPiso,
    ALTURA_PISO : alturaPiso,
    COR_PISO_LIMPO : "hsl(287, 100%, 50%)",
    COR_PISO_SUJO : "hsl(0, 41%, 24%)",

    ESPACAMENTO_X : 200,
    ESPACAMENTO_Y : 200,

    DURACAO_MOVIMENTO : 700,
    MAXIMO_MOVIMENTOS_EM_VAO : 15
};
