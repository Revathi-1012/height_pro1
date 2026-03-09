const video = document.getElementById("video");

let angle = 0;

// Back camera open
navigator.mediaDevices.getUserMedia({

video:{

facingMode:{ exact:"environment" }

}

})

.then(stream=>{

video.srcObject = stream;

})

.catch(()=>{

// fallback

navigator.mediaDevices.getUserMedia({video:true})

.then(stream=>{

video.srcObject = stream;

})

})


// angle sensor

window.addEventListener("deviceorientation",(event)=>{

angle = Math.abs(event.beta);

document.getElementById("angle").innerText =
"Angle: "+angle.toFixed(2);

});

function measureHeight(){

let distance = document.getElementById("distance").value;

if(!distance){

alert("Enter distance first");

return;

}

let height = distance * Math.tan(angle*Math.PI/180);

document.getElementById("result").innerText =
"Height: "+height.toFixed(2)+" meters";

}
