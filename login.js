function journey(){
    name=document.getElementById("name").value;
    window.location="index.html";
    localStorage.setItem("name",name);
    speaks();
}
function speaks(){
    var synth=window.speechSynthesis;
    catchsome="Time To Catch Some Pokemon"+name+":)"
    utterThis=new SpeechSynthesisUtterance(catchsome);
    synth.speak(utterThis);
}