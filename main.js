
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = "";
}
function draw() {
    fill(255, 0, 0);
    circle(60, 60, 90);
    fill(255, 0, 0);
    circle(60, 420, 90);
    fill(255, 0, 0);
    circle(580, 420, 90);
    circle(580, 60, 90);
    fill(0, 128, 0);
    rect(100, 40, 440, 40);
    fill(0, 128, 0);
    rect(40, 100, 40, 280);
    fill(0, 128, 0);
    rect(100, 400, 440, 40);
    fill(0, 128, 0);
    rect(560, 100, 40, 280);
    image(video, 110, 90, 420, 300);
   
}
function takeSnapshot(){
    save('studentName.png');
}
