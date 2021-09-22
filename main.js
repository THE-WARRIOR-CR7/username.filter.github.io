function preload() {

}
function setup() {
    canvas=createCanvas(579,500);
    canvas.position(500,150);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw() {
    image(video,0,0,579,500);
tint(tint_color);
}
function applyfilter() {
    tint_color=document.getElementById("color").value;
}
function take_snapshot() {
    save("colorfilter.png");
}