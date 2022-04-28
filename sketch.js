let pikachu;
let pokemonBall = [];
var bg;

///////////////////////////////
let cx = 303;
let cy = 426;
let cSize = 43;

var audio = document.getElementById("sound");
function bell(){
  audio.play();
}
///////////////////////////////

function preload(){
  bg = loadImage('image/pocket.jpg');
  pikachu = loadImage('image/pikachu.png');
  pokemonBall = loadImage('image/pokemonball.png');
  soundFormats('mp3');
  cuteSound = loadSound("cutesound.mp3");
}

document.getElementById( "image/pocket.jpg" ).onclick = function() {
  // img clicked
};
function myfunction(){
  document.getElementById('formId').submit();
 }





function setup(){
  createCanvas(400, 695);
  x=[]; y=[]; c=[]; d=50
  xstep=[]; ystep=[]
  for (i=0;i<5;i++){
    x[i]=random(200, 249)
    y[i]=random(200, 219)
    c[i]=1
    xstep[i]=random()
    ystep[i]=random(-5,5)
  }
}


function draw(){
  background(bg);
  for (i=0; i<5; i++){
    // if (c[i]==1) fill(255,255,255)
    // if (c[i]==2) fill(255,255,255)
    x[i]=x[i]+xstep[i]
    y[i]=y[i]+ystep[i]
    if (x[i]>100) xstep[i]=-xstep[i]
    if (x[i]<49) xstep[i]=-xstep[i]
    if (y[i]>255) ystep[i]=-ystep[i]
    if (y[i]<30) ystep[i]=-ystep[i]
    // circle(x[i], y[i], d)
    if (c[i]==1) image(pikachu, x[i], y[i], 70, 90)
    if (c[i]==2) image(pokemonball, x[i], y[i], 60, 60)
    // image(x[i], y[i], d)
    collision()

    if (mouseIsPressed){
      if (mouseX > cx-21.5 && mouseX < cx-21.5 + cSize && mouseY > cy-21.5 && mouseY < cy-21.5 + cSize){
        fill(0);
        sound.play();
      }
    } else {
      fill(70); 
    }
    
  }


  circle(cx,cy,cSize)
  noStroke();

}

// function mousePressed(){
//   if (mouseIsPressed){
//     if (mouseX > cx-21.5 && mouseX < cx-21.5 + cSize && mouseY > cy-21.5 && mouseY < cy-21.5 + cSize){
//       sound.play();
//     }
//   }

// }

// var clickMeButton = document.createElement('button');
// clickMeButton.id = 'myButton';
// clickMeButton.style.background = "black";
// document.body.appendChild(clickMeButton);
// myButton(303,429,40,40)

// var btn = document.getElementById('myButton');
// btn.onclick = function() {
// }




function mouseClicked(){
  for (i=0; i<5; i++) {
    if (dist(mouseX, mouseY, x[i], y[i])<d/2) {
      if (c[i]==2) {
        c[i]=1
      } else {
        c[i]=2
      }
    }
  }
}

function collision(){
  for (k=0;k<10;k++){
    for (j=k+1; j<1; j++){
      if (dist(x[k],y[k],x[j],y[j])<d) {
        temp=xstep[k]
        xstep[k]=xstep[j]
        xstep[j]=temp
        temp=ystep[k]
        ystep[k]=ystep[j]
        ystep[j]=temp

        if (c[k]==2){
          c[k]=1
        } else {
          c[k]=2
        }
        if (c[j]==2){
          c[j]=1
        } else {
          c[j]=2
        }
      }
    }
  }
}