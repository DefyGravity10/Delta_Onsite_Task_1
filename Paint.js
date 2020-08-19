var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.display="none";
document.getElementById("panel").style.display="none";

var colours=["red","blue","green","black","yellow"];

function start(){
    document.getElementById("Start").style.display="none";
    canvas.style.display="block";
    document.getElementById("panel").style.display="block";
}

function panel(x)
{
    ctx.strokeStyle=colours[x];
}

ctx.lineWidth=2;
ctx.lineJoin="round";

var mouse={
    x:0,
    y:0
};

canvas.addEventListener("mousemove",function(e){
    mouse.x=e.clientX;
    mouse.y=e.clientY;
    console.log(mouse.x+","+mouse.y);
});

canvas.addEventListener("mousedown",function(e){
    ctx.beginPath();
    ctx.moveTo(mouse.x,mouse.y);
    canvas.addEventListener("mousemove",paint);
});

canvas.addEventListener("mouseup",function(){
    canvas.removeEventListener("mousemove",paint);
});

function paint(){
    ctx.lineTo(mouse.x,mouse.y);
    ctx.stroke();
}