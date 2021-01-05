/*function initiateGame()
{
	console.log("Game Started");
	setCardImage("dCardImage1");
	setCardImage("dCardImage2");
	setCardImage("pCardImage1");
	setCardImage("pCardImage2");
	var dealerScore = setDealerHand("dScoreId");
	var playerScore = setPlayerHand("pScoreId");
	console.log(dealerScore + " " + playerScore);
	updateScore("dScore", "dealerCard");
	updateScore("pScore", "playerCard");
	promoteWinner(playerScore, dealerScore)

}



function generateRandomNumber(minValue, maxValue)
{
	var tmp = 0;
	
	
	tmp = Math.random() * maxValue + minValue;
    return Math.floor(tmp);
	
	console.log(tmp);
	return tmp;
}




function setCardImage(imgId)
{
	
	var rnd = generateRandomNumber(1,52);
	var cardValue = getCardValue(rnd);
	document.getElementById(imgId).src = "images/cards/img/" + rnd + ".png";
	document.getElementById(imgId).setAttribute("val", cardValue);
	
}



function updateScore(target, source)
{
	
	var cards = document.getElementsByClassName(source);
	console.log(cards);
	var score = 0;
	
	for (i = 0; i < cards.length; i++)
    {
		var cardVal = cards[i].getAttribute("val");
		score += parseInt(cardVal);	
	}
	
	
	console.log(score);
	document.getElementById(target).innerHTML = score;
	
}

function getCardValue(val)
{
	
	var result;
	var tmp = val % 13;
	
	switch(tmp)
	{
		
		case 1: result = 11; break;
		
		case 11: 
		case 12:
		case 0: result = 10; break;
		
		default: result = tmp; break;
		
		
	}
	
	return result;
	
}



function setDealerHand(dScoreId)
{
    var score;
	
	setCardImage("dCardImage1");
	setCardImage("dCardImage2");
	
	score = updateScore("dScore", "dealerCard");
	
	return score;
}



function setPlayerHand(pScoreId)
{
    var score;
   
    setCardImage("pCardImage1");
    setCardImage("pCardImage2");
  
    score = updateScore("pScore", "playerCard");
	
    return score;
}



function promoteWinner(playerScore, dealerScore)
{
	
var className;


if (dealerScore > playerScore)
{
   className = "dHeader";
   
   for(i=0;i<document.getElementsByClassName(className).length;i++)
   {
	  document.getElementsByClassName(className)[i].setAttribute("style","background-color:green");
   }
}


else
{	
   className = "pHeader";
   
   for(i=0;i<document.getElementsByClassName(className).length;i++)
   {
	  document.getElementsByClassName(className)[i].setAttribute("style","background-color:green");
   }
}



/*else if(playerScore == dealerScore)
{
	
headers = [];

backColor = "yellow";


for(i=0;i>document.getElementByClassName("pHeader").length;i++)
{
	fullHeaderList[] = document.getElementByClassName("pHeader")[i];
}


for(j=0;j>document.getElementByClassName("dHeader").length;j++)
{
	fullHeaderList[] = document.getElementByClassName("pHeader")[j];
}


for(i=0;i>fullHeaderList.length;i++)
{
	fullHeaderList[i].setAttribute("style","background-color:yellow");
}

return;

}


	
}
*/



function initiateGame()
{
	console.log("The game has started");
	var dealerScore = setDealerHand();
	var playerScore = setPlayerHand();
	console.log(dealerScore + " " + playerScore);
	setWinner(playerScore,dealerScore);
	
}





function generateRandomNumber(minValue, maxValue)
{
	var temp = 0;
	
	temp = Math.random() * maxValue + minValue;
	temp = Math.floor(temp);
	console.log(temp);
	
	return temp;
}




function setCardImage(imgId)
{
	console.log(imgId);
	var rnd = generateRandomNumber(1, 52);
	var cardValue = getCardValue(rnd);
	document.getElementById(imgId).src = "images/cards/img/" + rnd + ".png";
	document.getElementById(imgId).setAttribute("val", cardValue);
}





function setDealerHand()
{
	var score;
	setCardImage("dCardImage1");
	setCardImage("dCardImage2");
	score = updateScore("dScore","dealerCard");
		
	return score;
}







function setPlayerHand()
{
	var score;
	setCardImage("pCardImage1");
	setCardImage("pCardImage2");
	score = updateScore("pScore","playerCard");
	
	return score;
}




function getCardValue(val)
{
	
	var result;
	var tmp = val % 13;
	switch(tmp){
		case 0:
		case 11:
		case 12:
			result = 10;
			break;
		case 1:
			result = 11;
			break;
		default:
			result = tmp;
	}
	
	return result;
}





function updateScore(target,source)
{
	var cards = document.getElementsByClassName(source);
	var score = 0;
	console.log(cards);
	
	for (i=0;i<cards.length;i++)
	{
		score += parseInt(cards[i].getAttribute("val"));
		console.log("score:" + score);
	}
	
	document.getElementById(target).innerHTML = score;
	
	return score;
}






function setWinner(pScore,dScore)
{
	
	console.log(dScore + " " + pScore);
	
	var headers;
	
	var backColor = "green";
	
	if(pScore > dScore)
	{
		//highlight Player name
		headers = document.getElementsByClassName("pHeader");
	}
	
	
	else if (pScore == dScore)
	{
		
		backColor = "yellow";
		headers = [];
		
		for (j=0; j<document.getElementsByClassName("pHeader").length; j++)
		{
			headers.push(document.getElementsByClassName("pHeader")[j]);
	    }
		
		
		for (k=0; k<document.getElementsByClassName("pHeader").length; k++)
		{
			headers.push(document.getElementsByClassName("dHeader")[k]);
		}
	
		
		headers = document.getElementsByClassName("headers");
	}
	
	
	else
	{
		//highlight Dealer name
		headers = document.getElementsByClassName("dHeader");
	}
	
	console.log(headers);
	
	for (i=0;i<headers.length;i++)
	{
		headers[i].setAttribute("style","background-color:" + backColor+ ";");
	}
	
}







function addCard(target)
{
	var img = document.createElement("img");
	var cardSection = document.getElementById(target);
	var rnd = generateRandomNumber(1, 52);
	var cardValue = getCardValue(rnd);
	
	img.src = "images/cards/img/" + rnd + ".png";
	img.classList.add("cardSize");
	img.classList.add("playerCard");
	img.setAttribute("val", cardValue);
	
	cardSection.appendChild(img);
	score = updateScore("pScore","playerCard");
}


