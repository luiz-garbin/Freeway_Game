//Imagens do Jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//Som Jogo
let trilha
let batida
let ponto


function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  trilha = loadSound("sons/trilha.mp3") 
  batida = loadSound("sons/colidiu.mp3")
  ponto = loadSound("sons/pontos.wav")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro, imagemCarro2, imagemCarro3]
}
