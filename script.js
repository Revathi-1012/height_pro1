const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let refPixels = 0;
let objPixels = 0;

async function startCamera(){

const stream = await navigator.mediaDevices.getUserMedia({video:true});

video.srcObject = stream;

}

async function loadModel(){

const model = await cocoSsd.load();

video.onloadeddata = () => {

canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

setInterval(async ()=>{

const predictions = await model.detect(video);

ctx.clearRect(0,0,canvas.width,canvas.height);

predictions.forEach(p=>{

const [x,y,width,height] = p.bbox;

ctx.strokeStyle="red";
ctx.strokeRect(x,y,width,height);

ctx.fillText(p.class,x,y);

if(p.class==="bottle"){

refPixels = height;

}

if(p.class==="person"){

objPixels = height;

}

});

},200);

};

}

function calculateHeight(){

let refHeight = document.getElementById("refHeight").value;

let realHeight = (objPixels/refPixels) * refHeight;

document.getElementById("result").innerText =
"Estimated Height: "+realHeight.toFixed(2)+" cm";

}

startCamera();
loadModel();
