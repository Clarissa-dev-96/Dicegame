var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var images1= "images/dice" + randomNumber1 + ".png";
var images2= "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);
// Wenn img1 = img 2 dann draw
// Wenn img1 > img 2 dann player 1 wins
// Wenn img1 < img 2 dann player 2 wins 
if (randomNumber1 === randomNumber2){
    document.querySelector(".container h1").innerHTML ="Draw!";
}
else if (randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML = " 🚩 Player1 wins";
} 
else if(randomNumber1<randomNumber2){
   document.querySelector(".container h1").innerHTML =  "Player2 wins 🚩";
}