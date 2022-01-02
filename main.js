function setup()
{
canvas = createCanvas(400,400);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);

}
function ClearCanvas(){
    background("white");
}
function draw()
{
strokeWeight(13);
stroke(0);
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function preload()
{
classifier=ml5.imageClassifier("DoodleNet")
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
if (error){
console.log(error);
}
else{
    console.log(results);
    document.getElementById("object").innerHTML = results[0].label
    document.getElementById("confidence").innerHTML =   Math.floor(results[0].confidence * 100) + "%"
}
}