
let arrayWord = ['hello','mother','donde','sl'];
let storm = ['first','second','third','fourth','fith','final'];
let numOpponents = 1
let MaxStorm = 5;

let tempWord = ''
let point = 0
let health = 3
let wave = 1
let pause = false
let shakeX = 0
let shakeY = 0



function preload() {
  mety = loadImage('Untitled_Artwork.png')
  typebar = loadImage('Untitled_Artwork(1).png')
  circleHub = loadImage ('Untitled_Artwork(2).png')
  backingCircle = loadImage('gussi.png')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  for(let i = 0; i<MaxStorm;i++){
   storm[i] = new drawMet()
  }

  imageMode(CENTER);
   
  
}

function draw() {


  background(100);

  
  
  
  image(typebar,displayWidth*0.5,displayHeight*0.75,displayWidth*1,displayHeight*0.85*0.9 )
  image(backingCircle, displayWidth*0.1,displayHeight*0.85,displayWidth*0.25,displayHeight*0.40 )
  image(circleHub, displayWidth*0.1,displayHeight*0.85,displayWidth*0.25,displayHeight*0.40 )

  textAlign(CENTER)
textSize(100)
  text(tempWord, displayWidth*0.5, displayHeight*.9);
  textSize(25)
  
  

  let tempHeight = displayHeight*0.2;
  let tempWidth = displayWidth*0.1;


  text(displayhealth(), tempHeight, tempWidth);
  text(point, 0.75*tempHeight, 0.75*tempWidth);
  
  if(tempWord=='cheat'){
    tempWord='';
    point+=10;
  }
 

  if(point>=10){

    pause= true;

    wave++;
    
    text("WAVE"+ wave, 0.85*tempHeight, 0.85*tempWidth);
    

    numOpponents++;
    point = 0;
    pause = false;
  }

  
for(let i = 0; i<numOpponents;i++){
  storm[i].check();
   storm[i].show();
    storm[i].move();
   
  }
}

function deathScreen(){
  for(let i = 0; i<numOpponents;i++){
    storm[i].change();
   }
  square(displayHeight*0.5, displayWidth*0.5, 40);

}

function keyPressed(){

  if(key.length==1){

    tempWord=tempWord+key;
  }
  else if((keyCode== BACKSPACE)&&(tempWord.length!=0)){
    tempWord= tempWord.substring(0, tempWord.length-1)
  }
 
}

function drawMet(){
let rotateVar =0;

let holdText = random(arrayWord);
let stopVarable=false;
//let checkLower = false;
 
  this.x= random(0,displayWidth-100);
  this.y=random(-7,0);

this.change = function(){
  stopVarable=true;
}


  this.check = function(){
  if(tempWord==holdText){

  
    tempWord='';
   
    stopVarable= true;
    point+=1;
    holdText = random(arrayWord);
    this.x= random(0,displayWidth-100);
    this.y=random(-7,0);

  
    stopVarable= false;
   //}
  }

}
  
  this.show = function(){
  if(stopVarable!=true){
    noStroke();
  

 // translate(this.x,this.y)
  text(holdText,this.x, this.y);
  //rotate (rotateVar);
    image(mety,this.x, this.y,20,20);
    
   // rotateVar += 3;
  }
}

 this.move = function(){
  if(pause!=true){
  this.grav =random(1.000000000001,1.004);
  this.speed = random(0.2, 0.5);
  if(stopVarable==false){
  this.y=(this.y+this.speed)*this.grav;
  }
    if(this.y >= displayHeight){
      this.grav = 0;
      health = health-1;
      if(health<=0){
        deathScreen();
       }
      this.x = random(0,displayWidth);
      
      //explosion particles
      this.y =random(-7,0);
    }
  }

}
 
}


function displayhealth(){
  
  let stringHearttemp = '';

  for(let u = 0; u<health;u++){
    stringHearttemp+= ' heart ';
  }

 return stringHearttemp;
  
}