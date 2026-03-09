let angle = 0;

window.addEventListener("deviceorientation", function(event){

angle = 90 - event.beta;

document.getElementById("angle").innerText =
"Angle: " + angle.toFixed(2) + "°";

});

function startMeasure(){

let distance =
document.getElementById("distance").value;

let height =
distance * Math.tan(angle * Math.PI / 180);

document.getElementById("result").innerText =
"Height: " + height.toFixed(2) + " meters";

}