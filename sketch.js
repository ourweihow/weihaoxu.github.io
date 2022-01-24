const posX = 250;
const posY = 250;
const sizeW = 250;
const sizeH = 250; 
const radius = 125;


var current_minute = minute()

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
    angleMode(DEGREES);
}

function draw() {
	background(225);
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);
    
    let angle1 = map(second(),0,60,0,360)
    arc(posX, posY , 300, 300, -90, angle1 - 90);
    fill(100);
    let angle2 = map(minute(),0,60,0,360)
    arc(posX, posY , 200, 200, -90, angle2 - 90);
    fill(180);
    let angle3 = map(hour(),0,24,0,360)
    arc(posX, posY , 100, 100, -90, angle3 - 90); 
    
    // print minute to the JS console everytime it changes
    if (minute() != current_minute){
        print(minute())
        current_minute = minute()
    }
    
}


//
//function draw() {
//  background(200);
//
//  fill(0);
//  arc(posX, posY , sizeW, sizeH, angle + 90, angle - 90);
// 
//  angle++;
//}