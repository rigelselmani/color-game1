var numSquares =6;
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");



    for (var i=0;i<squares.length;i++){
            squares[i].style.background=colors[i]
   }

function generateRandomColors(num){
    var arr=[]
    for (var i=0;i<num;i++){
        arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    var r=Math.floor(Math.random()* 256);
    var g=Math.floor(Math.random()* 256);
    var b=Math.floor(Math.random()* 256);
    return "rgb("+ r +"," + g + "," + b + ")";
}
