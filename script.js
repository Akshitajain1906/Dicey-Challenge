//rand no between 1 to 6
var rand1 = Math.floor(Math.random()*6+1);
var rand2 = Math.floor(Math.random()*6+1);

document.getElementById("1").setAttribute("src","images/dice"+rand1+".png")
document.getElementById("2").src="images/dice"+rand2+".png"
if(rand1 > rand2){
    document.gquerySelector("h1") .innerHTML="Winner:Player 1!!";
}
else if(rand1==rand2)
    document.querySelector("h1").innerHTML="Its draw";
else
    document.querySelector("h1").innerHTML="Winner:Player2!!";
 