function setup()
{
canvas = createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);

}
function ClearCanvas(){
    background("white");
}
function updateCanvas(){
 background("white");   
    random_no = Math.floor((Math.random()*quick_draw_data_set)+1)
    sketch = quick_draw_data_set[random_no];
    console.log(sketch)
    document.getElementById("object").innerHTML = sketch;
    timer_counter = 0
    timer_check =""
    drawn_sketch =""
    answer_holder =""
    score = 0
}
function draw()
{
strokeWeight(13);
stroke(0);
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
  check_sketch();
    if(drawn_sketch == sketch){
    answer_holder = "set";
        score = score + 1;
        document.getElementById(Score).innerHTML = "The Score is " + score;
    }
        if( timer_check == "completed" || answer_holder == "set" )
time_check = ""
answer_holder = ""
updateCanvas();
}
}
}
funtion check_sketch(){
timer_counter++
    console.log(timer_counter);
    if (timer_counter == 2500){
timer_counter = 0
timer_check="completed"
if ()
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
    if(results[0].label == sketch){
    document.getElementById("confidence").innerHTML =   Math.floor(results[0].confidence * 100) + "%"
    }
}
}
