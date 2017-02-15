var parX;
var parY;
var frame = 0;
var sec = 0;
var end = 30;
var ended = false;
var start = true;
var score = 0;
var txt1 = "";
var txt2 = "";
var txt3 = "";
var click;
var endSound;
var winH;

function preload() {
    endSound = loadSound('end.wav');
    click = loadSound('click.wav');
    winH = windowHeight;
    if (winH < 650){
        winH = winH
    }
    else {
        winH = 650;
    }
}

function setup() {
    var canvas = createCanvas(1024, winH);
    canvas.parent("container");
    randomPosition();
    particle = new Particle(parX, parY);
    frameRate(30);
}

function draw() {
    background(51);
    if (start) {
        beginShape();
        textSize(12);
        fill(255);
        text("Click to start the game!", 435, (height / 2));
        endShape();
    }
    else if (!start) {
        timer();
        particle.show();
    }
    beginShape();
    textSize(32);
    fill(255);
    text(txt1, 425, (height / 2));
    text(txt2, 390, (height / 2 + 30));
    endShape();
    beginShape();
    textSize(12);
    text(txt3, 430, height / 2 + 50);
    endShape();
}