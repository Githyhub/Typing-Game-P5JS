
let arrayWord = ['hello','mother','donde','sl'];
let storm = [];
let numStorm = 0;

let tempWord = ' ';

let health = 3;
let speed = 0.1;
let stopVarable= false;

let lemmings



function setup() {
  let textWordBlankHidden = random(arrayWord);
  
  for(let i = 0; i<textWordBlankHidden.length; i++){
    tempWord+= ' _ ';
   }
  createCanvas(displayWidth, displayHeight);
  let inputHuman = createInput('');
  inputHuman.input(refreshText);
  inputHuman.position(displayWidth*0.5, displayHeight*0.65);
   lemmings = new drawMet();
   
  
}

function refreshText(){
 
 tempWord= this.value();
 if(tempWord!=textWordBlankHidden.length){
  if(textWordBlankHidden.length-tempWord.length!=0){
  for(let i = 0; i<textWordBlankHidden.length-tempWord.length; i++){
    tempWord+= ' _ ';
   }
  }

}

  if(tempWord.length>=textWordBlankHidden.length){
    tempWord=tempWord.substring(0,textWordBlankHidden.length);
  }

  
  
}



function draw() {
 


  background(100);

  
  circle(displayWidth*0.1, displayHeight*0.9,displayHeight*0.6)

  text(tempWord, displayWidth*0.5, displayHeight*.9);

  
  

  let tempHeight = displayHeight*0.2;
  let tempWidth = displayWidth*0.1;


  text(displayhealth(), tempHeight, tempWidth);


  lemmings.show();
  

  if(health<=0){
   deathScreen();
  }
  
  

  lemmings.move();


  

 

  
}

function deathScreen(){
  stopVarable = true;
  square(displayHeight*0.5, displayWidth*0.5, 40);

}


function drawMet(){
 
  this.x= random(0,displayWidth);
  this.y=0;

  
  this.show = function(){
  if(stopVarable==false){
    noStroke();
    circle(this.x,this.y,10,20);
  }
}

 this.move = function(){
  this.grav = 1.00005;
  this.speed = random(2,5);
  if(stopVarable==false){
  this.y=(this.y+this.speed)*this.grav;
  }
    if(this.y >= displayHeight){
      this.grav = 0;
      health = health-1;
      this.x = random(0,displayWidth);
      //explosion particles
      this.y =0;
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