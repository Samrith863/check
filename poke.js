canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown",myMouseDown);
background_image="download.jfif";

function add(){
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function myMouseDown() {
	document.getElementById("fivstar").innerHTML ="This pokeball in the canvas is normal. It's accuracy of catching pokemon should be 50%";
	document.getElementById("fivstar").style.color="white";
	speaker();
  }
  function b1(){
	  window.location="index.html";
  }
  function speaker(){
	  var synth=window.speechSynthesis;
	  boyTalk="This pokeball in the canvas is normal. It's accuracy of catching pokemon should be 50% :)"
	  utterThis=new SpeechSynthesisUtterance(boyTalk);
	  synth.speak(utterThis);
  }
  function gonext(){
	  window.location="cam.html";
  }