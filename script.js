var square=document.getElementsByClassName("square")
var arr=[]
for (var i=0;i<square;i++){
    arr.push(randomColor())
}

function randomColor(){
    var r=Math.floor(Math.random()* 256);
    var g=Math.floor(Math.random()* 256);
    var b=Math.floor(Math.random()* 256);
    return "rgb("+ r +"," + g + "," + b + ")";
}
