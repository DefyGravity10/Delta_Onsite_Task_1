var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth=2;
ctx.lineJoin="round";
ctx.strokeStyle="black";


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

function paint(){
    ctx.lineTo(mouse.x,mouse.y);
    ctx.stroke();
}