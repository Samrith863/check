var canvas=new fabric.Canvas("myCanvas");

player_y=350;
player_x=40;
player_object="";
back_object="";
back_x=0;
back_y=0;
pokemon_x=240;
pokemon_y=0;
pokemon_object="";

function lost(){
    fabric.Image.fromURL("path.png",function(Img){
        back_object=Img;

        back_object.scaleToWidth(800);
        back_object.scaleToHeight(400);
        back_object.set({
        top:0,
        left:30
        });
        canvas.add(back_object);
    });
   
}
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(70);
        player_object.scaleToHeight(70);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function pokemon_update(){
    fabric.Image.fromURL("charmander.png",function(Img){
        pokemon_object=Img;

        pokemon_object.scaleToWidth(40);
        pokemon_object.scaleToHeight(40);
        pokemon_object.set({
         top:pokemon_y,
         left:pokemon_x
        });
        canvas.add(pokemon_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
if(keyPressed=='38'){
    player_up();
    console.log("^ up arrow key pressed");
}

if(keyPressed=='40'){
    player_down();
    console.log("v down arrow key pressed");
}

if(keyPressed=='37'){
    player_left();
    console.log("-> left key pressed");
}
if(keyPressed=='39'){
    player_right();
    console.log("<- right arrow key pressed");
  }
  if(keyPressed=='76'){
    pokemon_update();
    console.log(" pokemon has loaded");
    }
    if(player_x==pokemon_x && player_y==pokemon_y){
        document.getElementById("myCanvas").style.borderColor="red";
      }

}









function player_up(){
    if(player_y>=0){
        player_y=player_y-10;
        canvas.remove(player_object);
        player_update();
        console.log("player y="+player_y+"player_x="+player_x);
    }
}

function player_down(){
    if(player_y<=500){
        player_y=player_y+10;
        canvas.remove(player_object);
        player_update();
        console.log("player y="+player_y+"player x="+player_x);
    }
}

function player_right(){
    if(player_x<=700){
        player_x=player_x+10;
        canvas.remove(player_object);
        player_update();
        console.log("player y="+player_y+"player x="+player_x);
    }
}

function player_left(){
    if(player_x>=0){
        player_x=player_x-10;
        canvas.remove(player_object);
       player_update();
        console.log("player y="+player_y+"player x="+player_x);
    }
}


function goback(){
    window.location="cam.html";
}

function face_forward(){
    window.location="recognize.html";
}