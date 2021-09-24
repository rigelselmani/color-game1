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
            console.log(clicked)
        }
    else if(clicked.length==1){
        if(clicked==this.style.background){
            console.log("you got it")
          
        }
            clicked.push(this.style.background)
            secondClick();
            console.log(clicked)
        }
    else if(clicked.length==2){
        if(clicked==this.style.background){
            console.log("you got it")
            
        }
            clicked.push(this.style.background)
            thirdClick();
            console.log(clicked)
        }
    else if(clicked.length==3){
        if(clicked==this.style.background){
            console.log("you got it")
            
        }
            clicked.push(this.style.background)
            fourthClick();
            console.log(clicked)
    }
    else if(clicked.length==4){
        if(clicked==this.style.background){
            console.log("you got it")
           
        }
            clicked.push(this.style.background)
            fifthClick();
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

function thirdClick(){
    var array=["yellow","red","white","black","blue","green"]
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=array[i]
    }
}
function fourthClick(){
    var array=["black","blue","yellow","red","green","white"]
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=array[i]
    }
}
function fifthClick(){
    var array=["white","yellow","black","green","blue","red"]
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=array[i]
    }
}