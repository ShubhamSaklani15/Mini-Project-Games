function game()
{
	//generating two random numbers between 1-6
	var a=Math.floor((Math.random()*6)+1);
	var b=Math.floor((Math.random()*6)+1);

	//changing image
	var image1="dice"+a+".png";
	var image2="dice"+b+".png";
	document.querySelectorAll("img")[0].setAttribute("src",image1);
	document.querySelectorAll("img")[1].setAttribute("src",image2);

	//changing text
	if(a==b)
	{
	document.querySelector("h1").innerHTML="DRAW";
	document.querySelector("h1").classList.remove("heading");
	document.querySelector("h1").classList.remove("player1");
	document.querySelector("h1").classList.remove("player2");
	document.querySelector("h1").classList.add("draw");
	}
	else if(a>b)
	{
	document.querySelector("h1").innerHTML="Player 1 Wins!";
	document.querySelector("h1").classList.remove("heading");
	document.querySelector("h1").classList.remove("draw");
	document.querySelector("h1").classList.remove("player2");
	document.querySelector("h1").classList.add("player1");
	}
	else
	{
	document.querySelector("h1").innerHTML="Player 2 Wins!";
	document.querySelector("h1").classList.remove("heading");
	document.querySelector("h1").classList.remove("draw");
	document.querySelector("h1").classList.remove("player1");
	document.querySelector("h1").classList.add("player2");
	}
}