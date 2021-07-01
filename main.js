canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_line = 1;
var lastpositionofx, lastpositionofy;
var mouse_event = "empty";

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mouse_event = "mouseDown";
    color = document.getElementById("Color").value;
    width_line = document.getElementById("Line_Width").value;
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionofy = e.clientY - canvas.offsetTop;
    console.log(currentpositionofx, currentpositionofy);
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.arc(currentpositionofx, currentpositionofy, 20, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastpositionofx = currentpositionofx;
    lastpositionofy = currentpositionofy;
    console.log(lastpositionofx, lastpositionofy);
}

function clear_canvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}