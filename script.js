firstLevel();
//////////FIRST LEVEL ///////////////
function firstLevel(){
        var array=["red","blue","white","green","yellow","black"];
     
        for (i=0;i<array.length;i++){
        var clicked=[]
        var square=document.createElement("DIV");
        square.classList.add("square");
        square.style.background=array[i]
        document.getElementById("container").append(square);
        function resset(){
            document.querySelector(".scored-balls").textContent=0
            clicked=[]
        }
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
                            new Audio("assets/sounds/win.mp3").play();
                            sixthClick();
                            var squares =document.querySelectorAll(".square")
                            for (i=0;i<squares.length;i++){
                                squares[i].remove()
                            }
                            secondLevel();
                    }else{
                        new Audio("assets/sounds/wrong.mp3").play();
                           this.classList.add("move")
                           resset()
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
        var array=["red","green","blue","yellow","black","white"];
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
        var array=["blue","black","yellow","red","green","white"]
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
        array=[]*-9
    }
}    

/////SECOND LEVEL ////////////////////////////////////////

function secondLevel(){
    var array=["blue","white","green","yellow","black","red","orange","pink"];
    document.querySelector(".level").textContent=2;
    document.querySelector(".balls-nr").textContent=8;
    resset()
    function resset(){
        document.querySelector(".scored-balls").textContent=0
        clicked=[]
    }
    for (i=0;i<array.length;i++){
    var clicked=[]
    var square=document.createElement("DIV");
    square.classList.add("square");
    square.style.background=array[i]
    square.style.margin="0";
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
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        sixthClick();
                }
                else if(clicked.length==6&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        seventhClick();
                } 
                else if(clicked.length==7&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/win.mp3").play();
                        clicked.push(this.style.background)
                        document.querySelector(".scored-balls").textContent=8
                        var squares =document.querySelectorAll(".square")
                        for (i=0;i<squares.length;i++){
                            squares[i].remove()
                        }
                        thirdLevel()
                }
                else{
                    new Audio("assets/sounds/wrong.mp3").play();
                       this.classList.add("move")
                       resset()
                }
          })  
    }

    function firstClick(){
        var array=["blue","green","yellow","white","black","red","orange","pink"];
        document.querySelector(".scored-balls").textContent=1
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
         
            squares[i].style.background=array[i]
        }
    }
    
    
    function secondClick(){
        var array=["blue","pink","orange","green","red","yellow","white","black"];
        document.querySelector(".scored-balls").textContent=2
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    
    function thirdClick(){
        var array=["white","blue","green","yellow","black","red","pink","orange"];
        document.querySelector(".scored-balls").textContent=3
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function fourthClick(){
        var array=["yellow","blue","black","green","white","pink","red","orange"];
        document.querySelector(".scored-balls").textContent=4
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function fifthClick(){
        var array=["black","green","yellow","white","red","orange","pink","blue"];
        document.querySelector(".scored-balls").textContent=5
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function sixthClick(){
        var array=["red","orange","pink","blue","green","yellow","white","black"];
        document.querySelector(".scored-balls").textContent=6
        for (var i=0;i<square.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function seventhClick(){
        var array=["yellow","pink","white","black","green","red","orange","blue"];
        document.querySelector(".scored-balls").textContent=7
        for (var i=0;i<square.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
}

/////////////////THIRD LEVEL//////////////////////

function thirdLevel(){
    var array=["purple","white","blue","gray","yellow","orange","black","red","pink","green"];
    document.querySelector(".level").textContent=3;
    document.querySelector(".balls-nr").textContent=10;
    resset()
    function resset(){
        document.querySelector(".scored-balls").textContent=0
        clicked=[]
    }
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
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        sixthClick();
                }
                else if(clicked.length==6&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        seventhClick();
                }
                else if(clicked.length==7&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        eighthClick();
                }
                else if(clicked.length==8&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/click.wav").play();
                        clicked.push(this.style.background)
                        ninethClick();
                        } 
                else if(clicked.length==9&& !clicked.includes(this.style.background)){
                        new Audio("assets/sounds/win.mp3").play();
                        document.querySelector(".scored-balls").textContent=10
                        }
                else{
                    new Audio("assets/sounds/wrong.mp3").play();
                       this.classList.add("move")
                       resset()
                }
          })  
    }

    function firstClick(){
        var array=["purple","green","blue","white","pink","gray","yellow","black","red","orange"];
        document.querySelector(".scored-balls").textContent=1
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
         
            squares[i].style.background=array[i]
        }
    }
    
    
    function secondClick(){
        var array=["yellow","green","blue","white","gray","orange","black","red","pink","purple"];
        document.querySelector(".scored-balls").textContent=2
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    
    function thirdClick(){
        var array=["green","blue","white","gray","yellow","black","red","orange","pink","purple"];
        document.querySelector(".scored-balls").textContent=3
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function fourthClick(){
        var array=["black","blue","green","white","gray","yellow","red","purple","orange","pink"];
        document.querySelector(".scored-balls").textContent=4
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function fifthClick(){
        var array=["blue","white","green","yellow","black","red","orange","pink","gray","purple"];
        document.querySelector(".scored-balls").textContent=5
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function sixthClick(){
        var array=["pink","blue","green","yellow","black","red","orange","gray","purple","white"];
        document.querySelector(".scored-balls").textContent=6
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function seventhClick(){
        var array=["orange","purple","blue","white","gray","yellow","black","red","pink","green"];
        document.querySelector(".scored-balls").textContent=7
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function eighthClick(){
        var array=["purple","white","gray","yellow","black","red","blue","orange","pink","green"];
        document.querySelector(".scored-balls").textContent=8
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
    function ninethClick(){
        var array=["orange","blue","white","green","yellow","black","red","pink","gray","purple"];
        document.querySelector(".scored-balls").textContent=9
        for (var i=0;i<array.length;i++){
            var squares=document.querySelectorAll(".square");
            squares[i].style.background=array[i]
        }
    }
}
