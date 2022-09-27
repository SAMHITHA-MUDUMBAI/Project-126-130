song1="";
song2=""
leftWristX=0;
leftWristY=0;

RightWristX=0;
RightWristY=0;

scoreLeftWrist=0;
scoreRightWrist=0;

function preload() {
     song1=loadSound("song1.mp3");
     song2=loadSound("song2.mp3");

}
function setup() {
    canvas = createCanvas(500,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}


function modelLoaded(){
    console.log('PoseNet Is Initialized');
}


function draw(){
 image(video,0,0,600,530);
 fill("#a07dfa");
    stroke("#712af5");
    if(scoreRightWrist>0.2)
    {

 song1= song1.isPlaying();
 console.log(song_Peter_pan);

 if(scoreLeftWrist> 0.2){
    circle(leftWristX,leftWristY,20);

 }
    
}  

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX= results[0].pose.leftWristX;
        leftWristY= results[0].pose.leftWristY;
        console.log("leftWristX = "+ leftWristX+"leftWristY = "+leftWristY);

        RightWristX= results[0].pose.RightWristX;
        RightWristY= results[0].pose.RightWristY;
        console.log("RightWristX = "+ RightWristX+"RightWristY = "+RightWristY);
    }
}
}




