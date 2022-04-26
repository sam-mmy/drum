// for ( var i=0 ; i<document.querySelectorAll("button").lenght ; i++  )
// {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("hello")
//     });

// }

//  var buttonLenght = document.querySelectorAll(".drum").lenght; this function is not working


console.log("hii");



var tom1 = new Audio("sounds/tom-1.mp3") ;
var tom2 = new Audio("sounds/tom-2.mp3") ;
var tom3 = new Audio("sounds/tom-3.mp3") ;
var tom4 = new Audio("sounds/tom-4.mp3") ;
var snare = new Audio("sounds/snare.mp3") ;
var crash = new Audio("sounds/crash.mp3") ;
var kick = new Audio("sounds/kick-bass.mp3") ;

 
for( var i=0; i<7 ; i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){

  var buttonHtml=this.innerHTML;
  makeSound(buttonHtml);
})
}
 
document.addEventListener("keypress",function(event){
  makeSound(event.key)
}
)

function makeSound (key){
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3") ;
        tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3") ;
        tom2.play();
      break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3") ;
        tom3.play();
      break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3") ;
        tom4.play();
      break;

      case "j":
        var snare = new Audio("sounds/snare.mp3") ;
        snare.play();
      break;

      case "k":
        var crash = new Audio("sounds/crash.mp3") ;
        crash.play();
      break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3") ;
        kick.play();
      break;
  
    default:console.log(this.innnerHTML);
      
  }
}