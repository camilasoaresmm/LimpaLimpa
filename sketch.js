// var de imagens //
var ImagMenu 
var imagComoJog
var imagColab

// var botões //
// var jogar //
var alturaJog = 60
var larguraJog = 230
var xMenuJog = 215
var yMenuJog = 105
// var How //
var alturaHow =70
var larguraHow = 350
var xMenuHow = 163
var yMenuHow = 210
// var como colaboradores //
var alturaColab = 70
var larguraColab = 450
var xMenuColab = 110
var yMenuColab = 313
// var botão voltar colaboradores //
var alturaColabV = 55
var larguraColabV = 120
var xMenuColabV = 580
var yMenuColabV = 25
// var botão voltar instruções //
var alturaHowV = 55
var larguraHowV = 120
var xMenuHowV = 580
var yMenuHowV = 12





// var tela menu //
var tela = 1
function setup() {
  createCanvas(700, 500);
  ImagMenu = loadImage('ImagMenu.png')
  imagComoJog = loadImage('imagComoJog.png')
  imagColab = loadImage('imagColab.png')
  
}

function draw() {
   // Tela Menu //
  if(tela==1){ 
  background(ImagMenu, 70)
        // botão jogar //
 if( mouseX > xMenuJog && mouseX < xMenuJog + larguraJog && mouseY > yMenuJog && mouseY < yMenuJog + alturaJog ){
   noFill(xMenuJog, yMenuJog, larguraJog, alturaJog)
  stroke('red')
  rect(xMenuJog, yMenuJog, larguraJog, alturaJog, 100)
   if(mouseIsPressed){
     tela=2;
   }
 }
  // botão how //
  
   if( mouseX > xMenuHow && mouseX < xMenuHow + larguraHow && mouseY > yMenuHow && mouseY < yMenuHow + alturaHow ){
    noFill(xMenuHow, yMenuHow, larguraHow, alturaHow)
  stroke('red')
  rect(xMenuHow, yMenuHow, larguraHow, alturaHow, 100)
   if(mouseIsPressed){
     tela=3;
   } 
 }
  // botão colab //
  if( mouseX > xMenuColab && mouseX < xMenuColab + larguraColab && mouseY > yMenuColab && mouseY < yMenuColab+ alturaColab ){
   noFill(xMenuColab, yMenuColab, larguraColab, alturaColab)
  stroke('red')
  rect(xMenuColab, yMenuColab, larguraColab, alturaColab, 100)
   if(mouseIsPressed){
     tela=4;
   }
}
  
  }
  
  // Tela Jogar //
  else if(tela==2){
    background(30, 40, 50)
    text('jogo rodará aqui',60,100)
  }
    
  // Tela como jogar //
  else if(tela==3){
    background(imagComoJog, 70)
  if( mouseX > xMenuHowV && mouseX < xMenuHowV + larguraHowV && mouseY > yMenuHowV && mouseY < yMenuHowV+ alturaHowV ){
   noFill(xMenuHowV, yMenuHowV, larguraHowV, alturaHowV)
  stroke('red')
  rect(xMenuHowV, yMenuHowV, larguraHowV, alturaHowV, 100)
   if(mouseIsPressed){
     tela=1;
   }
}
  }    

  // Tela Colaboradores //
  else if(tela==4){
    background(imagColab, 70)
    if( mouseX > xMenuColabV && mouseX < xMenuColabV + larguraColabV && mouseY > yMenuColabV && mouseY < yMenuColabV+ alturaColabV ){
   noFill(xMenuColabV, yMenuColabV, larguraColabV, alturaColabV)
  stroke('red')
  rect(xMenuColabV, yMenuColabV, larguraColabV, alturaColabV, 100)
   if(mouseIsPressed){
     tela=1;
   }
}
  }
  
  

}