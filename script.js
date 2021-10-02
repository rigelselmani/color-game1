    /////FIRST LEVEL CODE
    var array=["red","blue","white","green","yellow","black"];
 
    for (i=0;i<array.length;i++){
    var clicked=[]
    var square=document.createElement("DIV");
    square.classList.add("square");
    square.style.background=array[i]
    document.getElementById("container").append(square);
    square.addEventListener("click",function(){

                if(clicked.length==0){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        firstClick();
                    }
                else if(clicked.length==1&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        secondClick();
                    }
                else if(clicked.length==2&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play(); 
                        clicked.push(this.style.background)
                        thirdClick();
                    }
                else if(clicked.length==3&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        fourthClick();
                }
                else if(clicked.length==4&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        fifthClick();
                }
                else if(clicked.length==5&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/winfretless.ogg").play();
                        sixthClick();
                       
                }else{
                    new Audio("assets/sounds/tom-1.mp3").play();
                    // var squares=document.querySelectorAll(".square")
                    // for(i=0;i<squares.length;i++){
                       this.classList.add("move")
                    // }
                }
          })  
}

function firstClick(){
    var array=["blue","green","yellow","white","black","red"];
    document.querySelector(".scored-balls").textContent=1
    for (var i=0;i<array.length;i++){
        var squares=document.querySelectorAll(".square");
     
        squares[i].style.background=array[i]
    }
}


function secondClick(){
    var array=["green","blue","yellow","black","white","red"];
    document.querySelector(".scored-balls").textContent=2
    for (var i=0;i<array.length;i++){
        var squares=document.querySelectorAll(".square");
        squares[i].style.background=array[i]
    }
}

function thirdClick(){
    var array=["yellow","red","white","black","blue","green"]
    document.querySelector(".scored-balls").textContent=3
    for (var i=0;i<array.length;i++){
        var squares=document.querySelectorAll(".square");
        squares[i].style.background=array[i]
    }
}
function fourthClick(){
    var array=["black","blue","yellow","red","green","white"]
    document.querySelector(".scored-balls").textContent=4
    for (var i=0;i<array.length;i++){
        var squares=document.querySelectorAll(".square");
        squares[i].style.background=array[i]
    }
}
function fifthClick(){
    var array=["white","yellow","black","green","blue","red"]
    document.querySelector(".scored-balls").textContent=5
    for (var i=0;i<array.length;i++){
        var squares=document.querySelectorAll(".square");
        squares[i].style.background=array[i]
    }
}
function sixthClick(){
    var array=["green","black","yellow","white","red","blue"]
    document.querySelector(".scored-balls").textContent=6
    for (var i=0;i<square.length;i++){
        var squares=document.querySelectorAll(".square");
        squares[i].style.background=array[i]
    }
}

var level=document.querySelectorAll(".level");

function reset(){
         
}
