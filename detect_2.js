 objectDetector="";
status="";
objects=[];

function preload(){
img=loadImage("my_pokeball.jpg");
}


function setup(){
canvas=createCanvas(380,380);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}

function modelloaded(){
        console.log("Model Loaded");
status=true;
objectDetector.detect(img,gotResults);
}

function draw(){
image(img,0,0,380,380);
if(status !=""){
    
    for(i=0;i<objects.length;i++){
   document.getElementById("status").innerHTML="Status:objects detected";
fill("red");
   percent=floor(objects[i].confidence*100);
   text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
 noFill();
 stroke("red");
 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
 }
}