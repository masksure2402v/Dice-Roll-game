var randomNumber1 = (Math.floor(Math.random()* 6))+ 1;
var RandomImageSorce1 = "images/dice"+ randomNumber1 + ".png";
var y = document.querySelector(".img1").setAttribute("src",RandomImageSorce1);


var randomNumber2 = (Math.floor(Math.random()* 6))+ 1;
var RandomImageSorce2 = "images/dice"+ randomNumber2 + ".png";
var y = document.querySelector(".img2").setAttribute("src",RandomImageSorce2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}

