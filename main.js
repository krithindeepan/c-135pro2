status =""
object = []
function preload() {
    video=createVideo("video.mp4")
}
function setup() {
    canvas=createCanvas(500,400)
    canvas.position(400,200)
    video.hide()
    
}
function draw() {
    image(video,0,0,500,400)
    if(status!=""){
        objectDetector.detect(video,gotresult)
        for(i=0;i<object.length;i++){
            document.getElementById("status").innrHTML="status:objectdetected"
            document.getElementById("number_of_objects").innerHTML=object.length
            fill("red")
            percent=floor(object[i].confidence*100)
            textSize(22)
            text(object[i].label+""+percent,object[i].x,object[i].y)
            noFill()
            stroke("black")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
    
    }