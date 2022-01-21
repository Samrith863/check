
function preview(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";
    });
}
function setup(){
canvas=createCanvas(400,400);
canvas.position(250,50);

video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
    image(video,100,50,400,250);
tint(tint_color);
}
function add_filter(){
    tint_color=document.getElementById("example").value;
}
function back_up(){
    window.location="poke.html";
}
function next_up(){
    window.location="game.html";
}
