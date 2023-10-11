

function setup() {
  createCanvas(550, 400);
  trilha.loop()
}

function draw() {
  background(imagemEstrada);
  mostrarCarro();
  mostrarAtor();
  movimentoCarro();
  movimentoAtor();
 retornoInicialCarro();
  verificarColisao();
  placar()
  marcarPonto()
}

