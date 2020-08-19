var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-80;

canvas.style.display="none";
document.getElementById("panel").style.display="none";

var colours=["red","blue","green","black","yellow"];
var init_x, init_y;
var ending_x,ending_y;
var click;


function start(){
    document.getElementById("Start").style.display="none";
    canvas.style.display="block";
    document.getElementById("panel").style.display="block";
}

function panel(x)
{
    ctx.strokeStyle=colours[x];
}

var shape_draw;
function shape(z)
{
    shape_draw=z;
    if(shape_draw==2 || shape_draw==3)
        paint_rect(); 
}

ctx.lineWidth=4;
ctx.lineJoin="round";

var mouse={
    x:0,
    y:0
};

canvas.addEventListener("mousemove",function(e){
    mouse.x=e.x-5;
    mouse.y=e.y-65;
    console.log(mouse.x+","+mouse.y);
});

canvas.addEventListener("mousedown",function(e){
    ctx.beginPath();
    ctx.moveTo(mouse.x,mouse.y);
    if(shape_draw==1)
    {
        canvas.addEventListener("mousemove",erase);
    }
    else{
        canvas.addEventListener("mousemove",paint);
    }
});

canvas.addEventListener("mouseup",function(){
    if(shape_draw==1)
    {
        canvas.removeEventListener("mousemove",erase);
        z=0;
    }
    else{
    canvas.removeEventListener("mousemove",paint);
    }
});

function paint(){
    ctx.lineTo(mouse.x,mouse.y);
    ctx.stroke();
}

function erase(){
    ctx.clearRect(mouse.x-10,mouse.y-10,20,20);
}

function paint_rect()
{
    click=0;
    canvas.addEventListener("click",init);
}

function init()
{
    if(click==0){
    init_x=mouse.x;
    init_y=mouse.y;
    click++;
    }
    else if(click==1){
        ending_x=mouse.x;
        ending_y=mouse.y;
        draw();
    }
}

function draw()
{
    if(shape_draw==2)
    {
    ctx.rect(init_x,init_y,Math.abs(init_x-ending_x),Math.abs(init_y-ending_y));
    }
    else if(shape_draw==3)
    {
        ctx.beginPath();
        ctx.arc(init_x,init_y,Math.sqrt((ending_x-init_x)**2 + (ending_y-init_y)**2),0,Math.PI*2);
    }
    ctx.stroke();
    canvas.removeEventListener("click",init);
    click=2;
}