var Player1 = "Player 1";
var Player2 = "Player 2";
function editNames() {
    Player1 = prompt("Change Player1 name");
    Player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = Player1;
    document.querySelector("p.Player2").innerHTML = Player2;
}

function RollDice() {
var randomNo1 = Math.ceil(Math.random() * 6);
var randomNo2 = Math.ceil(Math.random() * 6);

document.querySelector(".img1").setAttribute("src","images/dice" + randomNo1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomNo2 + ".png");

if (randomNo1>randomNo2) {
    document.querySelector("h1").innerHTML=Player1 + " Wins!🚩"
}

else if (randomNo1<randomNo2) {
    document.querySelector("h1").innerHTML=Player2 + " Wins!🚩"
}

else{
    document.querySelector("h1").innerHTML="🚩Draw!🚩"
}

}
