var num=6;
var squares=document.querySelectorAll(".square");
var arr=[]


for (var i=0;i<squares.length;i++){
     squares[i].style.background=`${arr[i]}`
}

for (var i=0;i<num;i++){
    arr.push(randomColor())
}

function randomColor(){
    var r=Math.floor(Math.random()* 256);
    var g=Math.floor(Math.random()* 256);
    var b=Math.floor(Math.random()* 256);
    return "rgb("+ r +"," + g + "," + b + ")";
}
