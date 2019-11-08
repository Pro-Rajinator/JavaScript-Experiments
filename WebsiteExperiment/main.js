balls = [];

function ball(x, y, xSpeed, ySpeed) {
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.move = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
	this.display = function() {
		circle(this.x, this.y, 50);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	for(i = 0; i < 5; i++) balls.push(new ball(random(width), random(height), random(-10, 10), random(-10, 10)));
}

function draw() {
	background(200);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
