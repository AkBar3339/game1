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

function randomPosition() {
    parX = random(width - 80);
    parY = random(height - 80);
}

function setup() {
    var canvas = createCanvas(1000, 650);
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
        text("Click to start the game!", 435, 325);
        endShape();
    }
    else if (!start) {
        timer();
        particle.show();
    }
    beginShape();
    textSize(32);
    fill(255);
    text(txt1, 425, 320);
    text(txt2, 390, 355);
    endShape();
    beginShape();
    textSize(12);
    text(txt3, 445, 380);
    endShape();
}

function mouseClicked() {
    var clicked = particle.clicked();
    if (!ended){
        if (clicked) {
            randomPosition();
            particle.update(parX, parY);
            score += 1;
        }
    }
    if (start) {
        start = false;
    }
}

function keyPressed() {
    if (keyCode === 32) {
        if (ended) {
        reset();
        }
    }
}

function timer() {
    frame++;
    sec = floor(frame / 30);
    beginShape();
    textSize(24);
    fill(255, 200);
    text("Time: " + sec, 0, 25);
    endShape();
    if (sec == end){
        endGame();
    }
}
function endGame() {
    
    txt1 = "Game over.";
    txt2 = "Your score is: " + score;
    txt3 = "Press space to continue."
    ended = true;
    noLoop();
}
function reset() {
    ended = false;
    frame = 0;
    sec = 0;
    score = 0;
    txt1 = "";
    txt2 = "";
    txt3 = "";
    randomPosition();
    particle.update(parX, parY);
    loop();
}
