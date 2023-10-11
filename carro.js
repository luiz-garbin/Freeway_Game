//lista ariavel Carros
let xCarros = [600,600,600,600,600,600]
let yCarros = [36,96,152, 212, 266,310]
let velocidadeCarros = [2,3,4,3.5,4.1,2.8]
let comprimentoCarros = 50
let larguraCarros = 40



function mostrarCarro(){
  for(let i=0; i< imagemCarros.length; i++){
  
   image(imagemCarros[i], xCarros[i],yCarros[i],comprimentoCarros,larguraCarros)
 
  }
}


function movimentoCarro(){
  for(let i= 0; i< imagemCarros.length; i++){
  xCarros[i] -=velocidadeCarros[i];
  
  } 
}


function retornoInicialCarro(){
  for (let i=0; i<imagemCarros.length; i++){
  if(passouTela(xCarros[i])){
    xCarros[i] = 600;
     }
  }
}

function passouTela(xCarros){
 return  xCarros <-50;
}