function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(550.150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('pose net is initialized');
}

function gotPoses(results){
    if(results.length> 0 ){
        console.log(results);
    }
}

function draw(){
    background('#2efc2b');
}