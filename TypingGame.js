
let arrayWord = ['world', 'father', 'esta', 'array', 'extension', 'example', 'words', 'generic']
let storm = ['first','second','third','fourth','fith','final']
let numOpponents = 1
let MaxStorm = 5


let tempWord = ''
let point = 0
let health = 3
let wave = 1
let pause = false
let shakeX = 0
let shakeY = 0
let hurt = false
let scoredpnt = false
let showDeath = false
let showWave = false
let displaceWave = 1000


function preload() {
  bobScore = loadImage('IMG_1063.PNG')
  bobHurt = loadImage('IMG_1064.PNG')
  bobNormal = loadImage('IMG_1062.PNG')
  mety = loadImage('Untitled_Artwork.png')
  typebar = loadImage('Untitled_Artwork(1).png')
  circleHub = loadImage ('Untitled_Artwork(2).png')
  backingCircle = loadImage('gussi.png')
  backgroundImage= loadImage('Atar.png')
  heartImage = loadImage('Heart.png')
  displayScreen = loadImage('screens.png')
  gameOver = loadImage('gavemover.png')
  


soundFormats('mp3');
 hello = loadSound('cinematic-boom-171285.mp3');

}

function setup() {
  
  background(0)
  frameRate = 120
  hello.setVolume(0.1);
  hello.play()

  createCanvas(displayWidth, displayHeight);
  for(let i = 0; i<MaxStorm;i++){
   storm[i] = new drawMet()
  }

  imageMode(CENTER);
   
  
}

function scroll(){
  image(backgroundImage, 0, 0,displayWidth, displayHeight)
}

function bobState(){
  if(hurt){
    image(bobHurt, displayWidth*0.07,displayHeight*0.85,displayWidth*0.10,displayHeight*0.25 )
    tint(255, 0, 0)
    if(frameCount%15==0){
    tint(255,255,255)
    hurt = false;
    }
  }
  else if(scoredpnt){
    image(bobScore, displayWidth*0.07,displayHeight*0.85,displayWidth*0.10,displayHeight*0.25 )
    tint(0, 200, 0)
    if(frameCount%15==0){
    tint(255,255,255)
    scoredpnt = false;
    }
  }
  else{
  image(bobNormal, displayWidth*0.07,displayHeight*0.85,displayWidth*0.10,displayHeight*0.25 )
  }
}

function draw() {
 
  background(0);
  scroll()
  
  
  image(displayScreen,displayWidth*0.085,displayHeight*0.10,displayWidth*0.15,displayHeight*0.25 )
 
  image(typebar,displayWidth*0.5,displayHeight*0.90,displayWidth*1,displayHeight*0.95 )
  image(backingCircle, displayWidth*0.1,displayHeight*0.85,displayWidth*0.25,displayHeight*0.40 )
  bobState()
  image(circleHub, displayWidth*0.1,displayHeight*0.85,displayWidth*0.25,displayHeight*0.40 )
  displayhealth()

  textAlign(CENTER)
textSize(90)
  text(tempWord, displayWidth*0.5,displayHeight);
  textSize(25)
  
  

  let tempHeight = displayHeight*0.2;
  let tempWidth = displayWidth*0.1;


  text('Wave: ' + wave, 0.75*tempHeight, 0.55*tempWidth);
  text('Score: ' + point, 0.75*tempHeight, 0.75*tempWidth);

if(showWave==true){
  text("Wave: "+ wave, 0.85*tempHeight, (0.85*tempWidth+displaceWave));

  displaceWave=0
}
else{
  
  displaceWave =  1000
}

if(showWave){
  displaceWave=0
  text("Wave: "+ wave, 0.85*tempHeight, (0.85*tempWidth+displaceWave));

  if(frameCount%55==0){
    displaceWave=1000
  showWave =false;
  }
}

   
  
  
  if(tempWord=='cheat'){
    tempWord='';
    point+=10;
  }
 
  if(showDeath){
    image(gameOver, displayWidth*0.5,displayHeight*0.5,displayWidth*0.25,displayHeight*0.25 )


  }

  if(point>=10){

    pause= true;

    wave++;
    showWave=true;

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
  showDeath = true;

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
 
  this.x= random(displayWidth*0.1, displayWidth*0.8);
  this.y=random(-7,0);

this.change = function(){
  stopVarable=true;
}


  this.check = function(){
  if(tempWord==holdText){
    scoredpnt = true;
  
    tempWord='';
   
    stopVarable= true;
    point+=1;
    holdText = random(arrayWord);
    this.x= random(displayWidth*0.1, displayWidth*0.8);
    this.y=random(-7,0);

  
    stopVarable= false;
   //}
  }

}
  
  this.show = function(){
  if(stopVarable!=true){
    noStroke();
  

 // translate(this.x,this.y)
 fill('white')
  text(holdText,this.x, this.y-20);
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
    if(this.y >= displayHeight*0.85){
      hurt= true;
      this.grav = 0;
      health = health-1;
      if(health<=0){
        deathScreen();
       }
      this.x = random(0,displayWidth);
      hello.play();
      //explosion particles
      this.y =random(-7,0);
    }
    
  }

}
 
}


function displayhealth(){
  let he =displayWidth*0.05;
  let tempHel = displayWidth*0.23
  
   
  if(health>=3){
image(heartImage, tempHel,displayHeight*0.8,displayWidth*0.10,displayHeight*0.25 )
  }
  if (health>=2){
 image(heartImage, tempHel+he,displayHeight*0.8,displayWidth*0.10,displayHeight*0.25 )
  }
 if (health >=1){
 image(heartImage, tempHel+he+he,displayHeight*0.8,displayWidth*0.10,displayHeight*0.25 )
 }
}