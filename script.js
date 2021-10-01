window.onload = () => {
    //write your code here
    var array=["red","blue","white","green","yellow","black"];

    for (i=0;i<array.length;i++){
    var square=document.createElement("DIV");
    square.classList.add("square");
    square.style.background=array[i]
    document.getElementById("container").append(square);
}
//         squares[i].style.background=array[i]
//         var clicked=[]
//         squares[i].addEventListener("click",function(){

//         if(clicked.length==0){
//                 new Audio("assets/sounds/click.wav").play();
//                 clicked.push(this.style.background)
//                 firstClick();
//             }
//         else if(clicked.length==1&& !clicked.includes(this.style.background)){
//                 new Audio("assets/sounds/click.wav").play();
//                 clicked.push(this.style.background)
//                 secondClick();
//             }
//         else if(clicked.length==2&& !clicked.includes(this.style.background)){
//                 new Audio("assets/sounds/click.wav").play(); 
//                 clicked.push(this.style.background)
//                 thirdClick();
//             }
//         else if(clicked.length==3&& !clicked.includes(this.style.background)){
//                 new Audio("assets/sounds/click.wav").play();
//                 clicked.push(this.style.background)
//                 fourthClick();
//         }
//         else if(clicked.length==4&& !clicked.includes(this.style.background)){
//                 new Audio("assets/sounds/click.wav").play();
//                 clicked.push(this.style.background)
//                 fifthClick();
//         }
//         else if(clicked.length==5&& !clicked.includes(this.style.background)){
//                 new Audio("assets/sounds/winfretless.ogg").play();
//                 sixthClick();
               
//         }else{
//             var crash = new Audio("assets/sounds/tom-1.mp3");
//             reset()
//             crash.play();
//         }
//   })    
// }


// function firstClick(){
//     var array=["blue","green","yellow","white","black","red"];
//     for (var i=0;i<squares.length;i++){
//         squares[i].style.background=array[i]
//     }
// }


// function secondClick(){
//     var array=["green","blue","yellow","black","white","red"];
//     for (var i=0;i<squares.length;i++){
//         squares[i].style.background=array[i]
//     }
// }

// function thirdClick(){
//     var array=["yellow","red","white","black","blue","green"]
//     for (var i=0;i<squares.length;i++){
//         squares[i].style.background=array[i]
//     }
// }
// function fourthClick(){
//     var array=["black","blue","yellow","red","green","white"]
//     for (var i=0;i<squares.length;i++){
//         squares[i].style.background=array[i]
//     }
// }
// function fifthClick(){
//     var array=["white","yellow","black","green","blue","red"]
//     for (var i=0;i<squares.length;i++){
//         squares[i].style.background=array[i]
//     }
// }
// function sixthClick(){
//     var array=["green","black","yellow","white","red","blue"]
//     for (var i=0;i<squares.length;i++){
//         squares[i].style.background=array[i]
//     }
// }

// var level=document.querySelectorAll(".level");

// function reset(){
//     var array=["blue","green","yellow","white","black","red"];
//     for(i=0;i<squares.length;i++){
//          squares[i].style.background=array[i]
//     }
//     level++
// }
}