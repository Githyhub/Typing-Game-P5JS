
let arrayWord = ['hello','mother','donde','slay'];
let textWordBlankHidden = 'TEMP';
let tempWord = ' ';
let health = 3;


for(let i = 0; i<textWordBlankHidden.length; i++){
  tempWord+= ' _ ';
 }



function setup() {
  createCanvas(displayWidth, displayHeight);
  let inputHuman = createInput('');
  inputHuman.input(refreshText);
  inputHuman.position(displayWidth*0.5, displayHeight*0.65);
  
}

function refreshText(){
  clear();
  tempWord= this.value();
  if(tempWord.length>=textWordBlankHidden.length){
    tempWord=tempWord.substring(0,textWordBlankHidden.length);
  }
  
}



function draw() {
  background(100);
  circle(displayWidth*0.1, displayHeight*0.9,displayHeight*0.6)

  text(tempWord, displayWidth*0.5, displayHeight*.9);
  textSize(30);

  displayhealth();





  
}

function displayhealth(){
  let tempHeight = displayHeight*0.2;
  let tempWidth = displayWidth*0.1;
  let stringHearttemp = '';

  while(health>0){
    stringHearttemp+= ' heart ';
    health = health -1;
  }
  text(stringHearttemp, tempHeight, tempWidth);
  textStyle(Bold);
  
}