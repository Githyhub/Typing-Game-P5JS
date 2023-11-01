
let arrayWord = ['hello','mother','donde','sl'];
let storm = ['first','second','third','fourth','fith'];
let numStorm = 1;

let tempWord = ' ';
let point = 0;
let health = 3;
let wave = 1;



function setup() {
  let textWordBlankHidden = random(arrayWord);
  

  createCanvas(displayWidth, displayHeight);
  let inputHuman = createInput('');
  inputHuman.input(refreshText);
  inputHuman.position(displayWidth*0.5, displayHeight*0.65);

  for(let i = 0; i<5;i++){
   storm[i] = new drawMet();
  }
   
  
}

function refreshText(){

 tempWord= this.value();


}



function draw() {
 


  background(100);

  
  circle(displayWidth*0.1, displayHeight*0.9,displayHeight*0.6)

  text(tempWord, displayWidth*0.5, displayHeight*.9);

  
  

  let tempHeight = displayHeight*0.2;
  let tempWidth = displayWidth*0.1;


  text(displayhealth(), tempHeight, tempWidth);
  text(point, 0.75*tempHeight, 0.75*tempWidth);
  
  if(point==10){
    wave++;
    text("WAVE"+ wave, 0.85*tempHeight, 0.85*tempWidth);
    numStorm++;
    point = 0;
  }

for(let i = 0; i<numStorm;i++){
  storm[i].check();
   storm[i].show();
    storm[i].move();
   
  }
}

function deathScreen(){
  for(let i = 0; i<numStorm;i++){
    storm[i].change();
   }
  square(displayHeight*0.5, displayWidth*0.5, 40);

}


function drawMet(){
let holdText = random(arrayWord);
let stopVarable=false;
 
  this.x= random(0,displayWidth);
  this.y=random(-7,0);

this.change = function(){
  stopVarable=true;
}

  this.check = function(){
  if(tempWord==(holdText)){
    tempWord='';
    stopVarable= true;
    point+=1;
    holdText = random(arrayWord);
    this.x= random(0,displayWidth);
    this.y=random(-7,0);

  
    stopVarable= false;
  }

 
}
  
  this.show = function(){
  if(stopVarable!=true){
    noStroke();
    circle(this.x,this.y,10,20);
    text(holdText,this.x, this.y);
  }
}

 this.move = function(){
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


function displayhealth(){
  
  let stringHearttemp = '';

  for(let u = 0; u<health;u++){
    stringHearttemp+= ' heart ';
  }

 return stringHearttemp;
  
}