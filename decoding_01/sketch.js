let mySound;

let img;
let c;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('libraries/comeBackHome2');

  img = loadImage('libraries/t2ne1.png');
}

function setup() {
  let cnv = createCanvas(1000, 1000);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);

  fft = new p5.FFT();
}

function draw() {

  
  let spectrum = fft.analyze();
  background(0);

  //let t2 = map(spectrum[i], 120,250, 100, 255);
  
 
  stroke(255);
  strokeWeight(1);
  for (let i = 0; i< 10; i++){
    strokeWeight(1);
    noFill();
    let x = map(spectrum[i], 0,100, 0, 175);

     let t1 = map(spectrum[i], 180,270, 0, 100);
     let t2 = map(spectrum[i], 225,270, 0, 100);
     let t3 = map(spectrum[i], 250,260, 0, 100);
     let t4 = map(spectrum[i], 254,260, 0, 60);

    
    //let h = -height + map(spectrum[i], 0, 255, height, 0);
    circle(width/2, height/2-222.5, x )

    circle(width/2, height/2+222.5, x )

    circle(width/2-200, height/2+100, x )

    circle(width/2+200, height/2+100, x )

    circle(width/2-200, height/2-100, x )
    
    circle(width/2+200, height/2-100, x )

    stroke(255,255,255,t1);
    strokeWeight(2.5);
    triangle(120, 300, width/2, height-60, height-120, 300);

    stroke(255,255,255,t2);
    fill(255,255,255,t4);
    triangle(height-120, height/2+222.5, width/2, 54, 120, height/2+222.5);

    stroke(255,255,255,t3);
    strokeWeight(3);

    fill(255,255,255,t3);
    triangle(width/2-200, height/2-100,width/2, height/2+222.5,width/2+200, height/2-100);

    

    //line(width/2, height/2, x, x);

    
    
  }
  //strokeWeight(t1);
    //tint(100, t2);
    image(img, width/2-200, height/2-50, 400, 100);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
