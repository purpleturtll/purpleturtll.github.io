let i = -500
const START  = -500
const STOP = 300
const squareSide = 100
let zoom = true

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
	perspective()
}

function draw(){
	background("#120136")
	orbitControl()
	stroke("#FFFFFF")
	strokeWeight(1)
	rotateX(-1.0)
	line(-500, 0, -500, 500, 0, -500)
	
	strokeWeight(10.0)
	stroke("#120136")
	fill("#120136")
	squareFrame(0, 0, i, color(0, map(i, START, STOP, 0, 255), 0))
	squareFrame(1, 1, i, color(map(i, START, STOP, 0, 255), 0, 0))
	squareFrame(-1, 1, i, color(0, 0, map(i, START, STOP, 0, 255)))
	squareFrame(-1, 2, i, color(map(i, START, STOP, 0, 255), 0, map(i, START, STOP, 0, 255)))
	squareFrame(1, 2, i, color(0, map(i, START, STOP, 0, 255), map(i, START, STOP, 0, 255)))
	squareFrame(0, 3, i, color(map(i, START, STOP, 0, 255), map(i, START, STOP, 0, 255), 0))
	if(zoom){
		i-=5
	}else{
		i+=5
	}
	console.log(i)
	if(i <= START) zoom = false
	if(i >= STOP) zoom = true
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
} 

function squareFrame(i, j, z, color){
	if(color){
		fill(color)
	}else{
		noFill()
	}
	beginShape()
	vertex(-50 + (i * squareSide), 0 , z + (j * squareSide))
	vertex(50 + (i * squareSide), 0 , z + (j * squareSide))
	vertex(50 + (i * squareSide), 0, z + 100 + (j * squareSide))
	vertex(-50 + (i * squareSide), 0, z + 100 + (j * squareSide))
	endShape(CLOSE)
}