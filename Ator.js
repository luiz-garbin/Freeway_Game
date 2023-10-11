//variavel Ator
let xAtor = 275;
let yAtor = 370;
let colisao = false;
let meusPontos= 0;


function mostrarAtor(){
  image(imagemAtor, xAtor,yAtor, 30, 30)
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover()){
    yAtor +=3    
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor +=3;
  }
}

function verificarColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros,larguraCarros,xAtor,yAtor,15)
    if(colisao){
      pontoInicial();
      meusPontos =0
      batida.play()
    }
  }
}

function pontoInicial(){
  xAtor = 275;
  yAtor = 368;
}


function placar(){
  fill(color(220,20,60))
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width/5,25)
}

function marcarPonto(){
  if (yAtor < 20){
    meusPontos +=1;
   pontoInicial()
  ponto.play()
  }
  
}


function podeMover(){
  return yAtor <370
}


