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
    txt3 = "Press spacebar to continue."
    ended = true;
    noLoop();
    endSound.play();
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

function mouseClicked() {
    var clicked = particle.clicked();
    if (!ended){
        if (clicked) {
            randomPosition();
            particle.update(parX, parY);
            score += 1;
            click.setVolume(0.5);
            click.play();
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

function randomPosition() {
    parX = random(width - 80);
    parY = random(height - 80);
}