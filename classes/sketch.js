let asteroidArray = [];
let maxAsteroid = 16;
let spaceship0;
let spaceship1;

class Asteroid {
    constructor() {
        this.x = 0;
        this.y = random(30, height - 30);
        this.v = random(2, 4);
        this.r = random(15, 40);
    }

    update(){
       this.x += this.v;
       if(this.x > width + this.r){
        this.r = random(15,40);
        this.x = 0 - this.r;

       }

    }
    draw(){
      fill(220,10,100);
      ellipse(this.x,this.y,2 * this.r,2 * this.r);
    }
}

class Spaceship{
constructor(_color){
  this.x = random(0,width);
  this.y = random(0,height);
  this.vx = random(-1,2);
  this.vy = random(-1,2);
  this.color = _color;

}
update(){
this.x +=this.vx;
this.y += this.vy;

if(this.x > width){
  this.x -= width;
}
if(this.y > height){
  this.y -= height;
}
}
draw(){
  stroke(0);
  fill(this.color);
  rect(this.x,this.y,50,15);
}


}



function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < maxAsteroid; i++) {
        let anAsteroid = new Asteroid();
        asteroidArray.push(anAsteroid);
    }
    spaceship0 = new Spaceship('gold');
    spaceship1 = new Spaceship('silver');
}

function draw() {
    background("lightblue");


    for (let i = 0; i < asteroidArray.length; i += 1) {
        let anAsteroid = asteroidArray[i];
        anAsteroid.update();
        anAsteroid.draw();
        }
        spaceship0.update();
        spaceship1.update();
        spaceship0.draw();
        spaceship1.draw();
    }


