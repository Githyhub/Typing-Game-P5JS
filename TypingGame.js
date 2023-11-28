
let arrayWord = ['world', 'father', 'esta', 'array', 'extension', 'example', 'words', 'generic']
let storm = ['first','second','third','fourth','fith','final', 'temp']
let numOpponents = 1
let MaxStorm = 6


let tempWord = ''
let point = 0
let health = 3
let wave = 1
let pause = false
let pauseScreen = false
let shakeX = 0
let shakeY = 0
let hurt = false
let scoredpnt = false
let showDeath = false
let introOver = false
let tik = 0 
let highScore = 0 
let win = false



function preload() {
  bobScore = loadImage('IMG_1063.PNG')
  bobHurt = loadImage('IMG_1064.PNG')
  bobNormal = loadImage('IMG_1062.PNG')
  mety = loadImage('Untitled_Artwork.png')
  typebar = loadImage('Untitled_Artwork(1).png')
  circleHub = loadImage ('Untitled_Artwork(2).png')
  backingCircle = loadImage('gussi.png')
  backgroundImage= loadImage('alex.png')
  heartImage = loadImage('Heart.png')
  displayScreen = loadImage('screens.png')
  gameOver = loadImage('gavemover.png')
  winner = loadImage('winnwr.png')
  


soundFormats('mp3');
 hello = loadSound('cinematic-boom-171285.mp3');

}

function setup() {
  
  createCanvas(displayWidth, displayHeight);
  background('black')
  frameRate(60)
  frameCount=0
  hello.setVolume(0.1);
  hello.play()
  pauseScreen=true
  imageMode(CENTER);

  for(let i = 0; i<MaxStorm;i++){
   storm[i] = new drawMet()
  }

}

function bobState(){
  if(hurt){
    image(bobHurt, displayWidth*0.07,displayHeight*0.85,displayWidth*0.10,displayHeight*0.25 )
    tint(255, 0, 0)
    if(frameCount%30==0){
    tint(255,255,255)
    hurt = false;
    }
  }
  else if(scoredpnt){
    image(bobScore, displayWidth*0.07,displayHeight*0.85,displayWidth*0.10,displayHeight*0.25 )
    tint(0, 200, 0)
    if(frameCount%30==0){
    tint(255,255,255)
    scoredpnt = false;
    }
  }
  else{
  image(bobNormal, displayWidth*0.07,displayHeight*0.85,displayWidth*0.10,displayHeight*0.25 )
  }
}


function introScreen(){

image(displayScreen, 0.48*displayWidth, 0.45*displayHeight, 1.2*displayWidth, 1.5*displayHeight)
fill(255,255,255)
textSize(50)
text('BOB TYPING GAME',0.26*displayWidth, 0.35*displayHeight)
textSize(25)
text('Type the words seen on the screen, make it too wave five, you have three lives, S to start',0.16*displayWidth, 0.55*displayHeight)

if(keyIsPressed == true){
  tempWord = ''
introOver = true
frameCount = 0
pauseScreen = false
pause = false
}
}



function draw() {

  if(wave>5){
    tempWord =''
  textSize(20)
  pauseScreen = true
  image(winner, displayWidth*0.5,displayHeight*0.35,displayWidth*0.8,displayHeight*1.6 )
  image(displayScreen, displayWidth*0.85,displayHeight*0.25,displayWidth*0.2,displayHeight*.6 )
  text('Destoryed \n'+(wave-1)*10 + point+' meteors\n' ,displayWidth*0.85,displayHeight*0.2)
  text('Survived \n' + parseInt(tik/60) + ' seconds', displayWidth*0.85,displayHeight*0.28 )
  highScore = parseInt(tik*(wave-1)*100 + point*10)
  text('High Score:' +highScore, displayWidth*0.85,displayHeight*0.38 )
  text('click to go home', displayWidth*0.5,displayHeight*0.68 )
 if(mouseIsPressed === true){
  text('SLAY', displayWidth*0.5,displayHeight*0.35,displayWidth*0.8,displayHeight*1.6 )
  //ADD HOME SCREEN LINK
 }
  }


  if(pauseScreen==true){
    pause=true
    if(introOver ==false){
    introScreen()
    }

    
}




if(pauseScreen==false){
tik ++
  background(0)
 
  
  
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
  let tempWidth = displayWidth*0.088;


  text('Wave: ' + wave + '/5', tempWidth, 0.45*tempHeight);
  textSize(20)
  text('Meteors Left: ' + (10 - point), tempWidth, 0.58*tempHeight);
  textSize(25)
  //text('FrameCount ' + frameCount, tempWidth, 0.75*tempHeight);


if(tempWord=='die'){
  tempWord=''
  health = 0
  deathScreen()

}
  if(tempWord=='cheat'){
    tempWord='';
    point+=10;
  }
 
  

  if(point>=10){
    pause= true;
    wave++;
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
   
  if(tempWord.length>=12){
    tempWord= tempWord.substring(0, 12)
  }

 
}

function drawMet(){
let rotateVar =0;

let holdText = random(arrayWord);
let stopVarable=false;
//let checkLower = false;
 
  this.x= random(displayWidth*0.2, displayWidth*0.8);
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
    this.x= random(displayWidth*0.2, displayWidth*0.8);
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
    image(mety,this.x, this.y,random(16,30),random(16,30));
    
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
      this.x = random(0.2*displayWidth,displayWidth*0.8);
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
  if(health>=1){
image(heartImage, tempHel,displayHeight*0.8,displayWidth*0.10,displayHeight*0.25 )
  }
  if (health>=2){
 image(heartImage, tempHel+he,displayHeight*0.8,displayWidth*0.10,displayHeight*0.25 )
  }
 if (health >=3){
 image(heartImage, tempHel+he+he,displayHeight*0.8,displayWidth*0.10,displayHeight*0.25 )
 }
}
