var colors=generateRandomColors();

var squares=document.querySelectorAll(".square");



    for (var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i]

        squares[i].addEventListener("click", function(data){
                 console.log(data)
        this.squares[i].style.background=colors[i]
        })
        squares[i].style.background=colors[i]
            
   }


function generateRandomColors(){
    var arr=[]
    for (var i=0;i<6;i++){
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
