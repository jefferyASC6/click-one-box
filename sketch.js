// Click One Box project

let red = 0
let blue = 255

function setup(){
    createCanvas(600,600);
    background(0,0,0);
}

function draw(){
    rect(250,250,100,100);
    fill(red,0,blue);
}

function change(){
    if (red === 0){
        red = 255 
        blue = 0
    }
    else if (blue === 0){
        blue = 255
        red = 0
    }
}

// try to make the square change color only when
// the mouse is clicked in the square
// let x1 = 250
// let x2 = 350
// let y1 = 250
// let y2 = 350

function mousePressed(){
    change()
}

function keyPressed(){
    if (keyCode === 32){
        change()
    }
}