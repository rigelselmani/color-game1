var squares=document.querySelectorAll(".square");

var array=["red","blue","white","green","yellow","black"];
var same=true;

for (var i=0;i<squares.length;i++){
    squares[i].style.background=array[i]
    var clicked=[]

    squares[i].addEventListener("click",function(){
    if(clicked.length==0){
            clicked.push(this.style.background)
            firstClick();
            console.log(clicked.length)
        }
    else if(clicked.length==1){
            secondClick();
            console.log(clicked)
        }
    })
}


function firstClick(){
    var array=["blue","green","yellow","white","black","red"];
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=array[i]
    }
}


function secondClick(){
    var array=["green","blue","yellow","black","white","red"];
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=array[i]
    }
}