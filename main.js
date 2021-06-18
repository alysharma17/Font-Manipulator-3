nose_x=0;
nose_y=0;
wirst_x=0;
wrist_y=0;
font_size=0;


function preload() {

}

function setup() {
    webcam=createCapture(VIDEO);
    webcam.size(550,500);
    canvas=createCanvas(500,500,);
    canvas.position(560,150);
    poseNet=ml5.poseNet(webcam, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

function modelLoaded() {
    console.log("PoseNet Initialized!")
}

function draw() {
    background('pink');
}


function gotPoses(results) {
if (results.length>0) {
    console.log(results);
    nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log(nose_x + " " +nose_y);   
font_size=floor(results[0].pose.leftWrist.x-results[0].pose.rightWrist.x);
}
}


function draw() {
fill('#7F7EFF');  
background('lightblue');
 text('Alysha', nose_x, nose_y);
   document.getElementById("size").innerHTML="Font size is " +font_size;
   textSize(font_size);
  
}