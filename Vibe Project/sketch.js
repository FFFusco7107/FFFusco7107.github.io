// Vibe Project
// Lucas F.
// Oct 7, 2025


let redCar, blueCar, ball;
let leftGoal, rightGoal;
let boostPads = [];
let redScore = 0;
let blueScore = 0;
let kickoff = true;

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  resetPositions();

  leftGoal = new Goal(30, height / 2, 'left');
  rightGoal = new Goal(width - 30, height / 2, 'right');

  // Create boost pads
  for (let i = 0; i < 8; i++) {
    let x = map(i, 0, 7, 100, width - 100);
    let y = random(100, height - 100);
    boostPads.push(new BoostPad(x, y));
  }
}

function draw() {
  background(30, 150, 30);

  // Field lines
  stroke(255);
  strokeWeight(2);
  noFill();
  line(width / 2, 0, width / 2, height);
  ellipse(width / 2, height / 2, 150);
  noStroke();

  // Goals
  leftGoal.show();
  rightGoal.show();

  // Boost pads
  for (let pad of boostPads) {
    pad.show();
  }

  // Update objects
  redCar.update();
  blueCar.update();
  ball.update();

  // Draw objects
  redCar.show();
  blueCar.show();
  ball.show();

  // Check for kickoff start
  if (kickoff && (ball.checkCarCollision(redCar, true) || ball.checkCarCollision(blueCar, true))) {
    kickoff = false;
  }

  // Handle ball collisions
  if (!kickoff) {
    ball.checkCarCollision(redCar);
    ball.checkCarCollision(blueCar);
  }

  // Check goals
  if (leftGoal.contains(ball)) {
    blueScore++;
    resetPositions();
  } else if (rightGoal.contains(ball)) {
    redScore++;
    resetPositions();
  }

  // Check boost pad pickups
  for (let pad of boostPads) {
    pad.checkPickup(redCar);
    pad.checkPickup(blueCar);
  }

  // Scoreboard
  fill(255);
  textAlign(CENTER, TOP);
  textSize(28);
  text(`Red: ${redScore}    Blue: ${blueScore}`, width / 2, 20);

  // Boost meters
  drawBoostMeters();
}

function drawBoostMeters() {
  // Red car (bottom-left)
  noStroke();
  fill(80);
  rect(150, height - 30, 200, 20, 5);
  fill(255, 100, 100);
  let redBoostWidth = map(redCar.boost, 0, 100, 0, 200);
  rect(150 - 100 + redBoostWidth / 2, height - 30, redBoostWidth, 20, 5);

  // Blue car (bottom-right)
  fill(80);
  rect(width - 150, height - 30, 200, 20, 5);
  fill(100, 150, 255);
  let blueBoostWidth = map(blueCar.boost, 0, 100, 0, 200);
  rect(width - 150 - 100 + blueBoostWidth / 2, height - 30, blueBoostWidth, 20, 5);

  fill(255);
  textSize(14);
  textAlign(LEFT, CENTER);
  text("BOOST", 40, height - 30);
  textAlign(RIGHT, CENTER);
  text("BOOST", width - 40, height - 30);
}

function resetPositions() {
  ball = new Ball(width / 2, height / 2);
  redCar = new Car(150, height / 2, color(220, 50, 50), 'WASD');
  blueCar = new Car(width - 150, height / 2, color(50, 100, 255), 'ARROWS');
  kickoff = true;

  // Make cars face the ball
  redCar.angle = degrees(atan2(ball.y - redCar.y, ball.x - redCar.x));
  blueCar.angle = degrees(atan2(ball.y - blueCar.y, ball.x - blueCar.x));
}

// ------------------- CAR CLASS -------------------
class Car {
  constructor(x, y, color, controls) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.controls = controls;
    this.angle = 0;
    this.speed = 0;
    this.maxSpeed = 5;
    this.acceleration = 0.2;
    this.friction = 0.95;
    this.turnSpeed = 4;
    this.w = 50;
    this.h = 80;
    this.boost = 100;
    this.boosting = false;
    this.particles = [];
  }

  update() {
    // Controls
    let forward = false, backward = false, left = false, right = false, boosting = false;

    if (this.controls === 'WASD') {
      forward = keyIsDown(87);
      backward = keyIsDown(83);
      left = keyIsDown(65);
      right = keyIsDown(68);
      boosting = keyIsDown(16); // SHIFT
    } else if (this.controls === 'ARROWS') {
      forward = keyIsDown(UP_ARROW);
      backward = keyIsDown(DOWN_ARROW);
      left = keyIsDown(LEFT_ARROW);
      right = keyIsDown(RIGHT_ARROW);
      boosting = keyIsDown(191); // "/" key
    }

    // Turning
    if (left) this.angle -= this.turnSpeed;
    if (right) this.angle += this.turnSpeed;

    // Acceleration
    if (forward) this.speed += this.acceleration;
    if (backward) this.speed -= this.acceleration;

    // Boost logic
    if (boosting && this.boost > 0) {
      this.boosting = true;
      this.speed += 0.3;
      this.boost -= 0.8;
      this.boost = max(this.boost, 0);
      this.emitParticles();
    } else {
      this.boosting = false;
    }

    // Limit speed & apply friction
    this.speed = constrain(this.speed, -this.maxSpeed * 2, this.maxSpeed * 2);
    this.speed *= this.friction;

    // Movement
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    this.x = constrain(this.x, this.w / 2, width - this.w / 2);
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);

    // Update particles
    for (let p of this.particles) p.update();
    this.particles = this.particles.filter(p => p.lifetime > 0);
  }

  show() {
    // Particles behind car
    for (let p of this.particles) p.show();

    // Car body
    push();
    translate(this.x, this.y);
    rotate(this.angle + 90);
    fill(this.color);
    rect(0, 0, this.w, this.h, 10);

    // Windshield
    fill(200);
    rect(0, -this.h / 4, this.w * 0.6, this.h / 4, 4);

    // Headlights
    fill(255, 255, 150);
    ellipse(-this.w / 3, -this.h / 2 + 5, 10, 10);
    ellipse(this.w / 3, -this.h / 2 + 5, 10, 10);

    pop();
  }

  emitParticles() {
    for (let i = 0; i < 3; i++) {
      let angle = radians(this.angle + 90);
      let px = this.x - cos(angle) * (this.h / 2);
      let py = this.y - sin(angle) * (this.h / 2);
      this.particles.push(new Particle(px, py, this.color));
    }
  }
}

// ------------------- PARTICLE CLASS -------------------
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.lifetime = 30;
    this.color = color;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifetime--;
  }

  show() {
    noStroke();
    fill(255, 200, 50, this.lifetime * 5);
    ellipse(this.x, this.y, 6);
  }
}

// ------------------- BALL CLASS -------------------
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 18;
    this.vx = 0;
    this.vy = 0;
  }

  update() {
    if (!kickoff) {
      this.x += this.vx;
      this.y += this.vy;
    }

    if (this.x < this.r) {
      this.x = this.r;
      this.vx *= -1;
    } else if (this.x > width - this.r) {
      this.x = width - this.r;
      this.vx *= -1;
    }

    if (this.y < this.r) {
      this.y = this.r;
      this.vy *= -1;
    } else if (this.y > height - this.r) {
      this.y = height - this.r;
      this.vy *= -1;
    }

    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  show() {
    fill(255, 200, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r * 2);
    noStroke();
  }

  checkCarCollision(car, previewOnly = false) {
    let d = dist(this.x, this.y, car.x, car.y);
    if (d < this.r + car.h / 2) {
      if (!previewOnly) {
        let angle = atan2(this.y - car.y, this.x - car.x);
        this.vx = 6 * cos(angle);
        this.vy = 6 * sin(angle);
      }
      return true;
    }
    return false;
  }
}

// ------------------- GOAL CLASS -------------------
class Goal {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 180;
    this.side = side;
  }

  show() {
    if (this.side === 'left') {
      fill(50, 100, 255, 150);
      stroke(50, 100, 255);
    } else {
      fill(255, 80, 80, 150);
      stroke(255, 80, 80);
    }
    strokeWeight(3);
    rect(this.x, this.y, this.w, this.h);
    noStroke();
  }

  contains(ball) {
    return (
      ball.x - ball.r < this.x + this.w / 2 &&
      ball.x + ball.r > this.x - this.w / 2 &&
      ball.y > this.y - this.h / 2 &&
      ball.y < this.y + this.h / 2
    );
  }
}

// ------------------- BOOST PAD CLASS -------------------
class BoostPad {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.active = true;
    this.cooldown = 0;
  }

  show() {
    if (this.active) {
      fill(255, 220, 0);
      noStroke();
      ellipse(this.x, this.y, 20);
    } else {
      fill(150, 150, 0, 100);
      ellipse(this.x, this.y, 20);
      this.cooldown--;
      if (this.cooldown <= 0) this.active = true;
    }
  }

  checkPickup(car) {
    if (this.active && dist(this.x, this.y, car.x, car.y) < 40) {
      car.boost = min(100, car.boost + 25);
      this.active = false;
      this.cooldown = 120; // frames until reactivation
    }
  }
}







