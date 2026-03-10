const video = document.getElementById("video")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let model

async function setupCamera(){

const stream = await navigator.mediaDevices.getUserMedia({

video:{
facingMode:"environment"
}

})

video.srcObject = stream

}

async function loadModel(){

model = await cocoSsd.load()

}

async function detect(){

const predictions = await model.detect(video)

ctx.clearRect(0,0,canvas.width,canvas.height)

predictions.forEach(pred=>{

const [x,y,width,height] = pred.bbox

ctx.strokeStyle="red"

ctx.strokeRect(x,y,width,height)

let distance = document.getElementById("distance").value

if(distance){

let realHeight = (height/500)*distance*2

document.getElementById("result").innerText =
"Estimated Height: "+realHeight.toFixed(2)+" meters"

}

})

}

setupCamera()

loadModel()
