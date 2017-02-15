function Particle(x, y){    
    this.pos = createVector(x, y);
    
    var randW;
    var randH;
    var randR;
    var randG;
    var randB;
    
    this.craeateFigure = function() {
        
        randW = random(50, 80);
        randH = random(50, 80);
        
        randR = random(80, 255);
        randG = random(80, 255);
        randB = random(80, 255);
    }
        
    this.craeateFigure();
    
    this.clicked = function() {
        var x = particle.pos.x + randW;
        var y = particle.pos.y + randH;
        if(mouseX >= particle.pos.x && mouseX <= x && mouseY >= particle.pos.y && mouseY <= y){
            return true;
        }
    }
    
    this.show = function() {
        noStroke();
        fill(randR, randG, randB);
        rect(this.pos.x, this.pos.y, randW, randH);
    }
    
    this.update = function(x, y) {
        this.pos.x = x;
        this.pos.y = y;
        this.craeateFigure();
    }
}
