
let textWordBlankHidden = 'hibus';
let tempWord = ' ';

for(let i = 0; i<textWordBlankHidden.length; i++){
  tempWord+= ' _ ';
 }

function setup() {
  createCanvas(displayWidth, displayHeight);

  text("temp", displayWidth*0.45, displayHeight*0.45);
  let inputHuman = createInput('');
  inputHuman.input(refreshText);
  inputHuman.position(displayWidth*0.5, displayHeight*0.65);
}

function refreshText(){
  clear();
  tempWord= this.value()

  if(tempWord.length>textWordBlankHidden.length){
    tempWord=tempWord.substring(0,textWordBlankHidden.length);
  }
  
}


function draw() {
  background(100);
  circle(displayWidth*0.1, displayHeight*0.9,displayHeight*0.6)

  text(tempWord, displayWidth*0.5, displayHeight*.9);
  textSize(30);


  
  
  
}
