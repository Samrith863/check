var images=["pok.png","great.png","ultra.png","master.png","safari.png","level.png","lure.png","moon.png","friend.png","love.png","heavy.png","fast.png","sport.png","priemer.png","reapeat.png","timer.png","nest.png","net.png","dive.png","luxury.png","heal.png","quick.png","dusk.png","cherish.png","park.png","dream.png","beast.png"];
var i=0;
function catchem_all(){
if(i==27){
i=0;
}
document.getElementById("poke").src=images[i];
i++;
}
function poke_one(){
    window.location="poke.html";
}
name = localStorage.getItem("name");

document.getElementById("hi").innerHTML = "Welcome to the Pokemon world " + name + "!";

function logout(){
    window.location="login.html"
    name=localStorage.removeItem("name");
}