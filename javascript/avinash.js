var target;
var capturedKey;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var aBets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function targetLetter(){
	var randomNum = Math.floor(Math.random() * ((25-0)+1) + 0);
	target = aBets[randomNum];
}
targetLetter();

console.log(target)

function reset(){
	guessesLeft = 9;
	document.getElementById("guessesLeftID").innerHTML =9;

	document.getElementById("youGuessedSoFarID").innerHTML =" ";
	console.log("reset called");
}

function myFunction(event) {
	console.log(target);
    var x = event.which || event.keyCode;
    var returnedStr = String.fromCharCode(x);
    capturedKey = returnedStr;
    console.log(guessesLeft);

    if(guessesLeft>0){
	    document.getElementById("youGuessedSoFarID").innerHTML +=" "+ returnedStr;
		document.getElementById("guessesLeftID").innerHTML = guessesLeft;
		guessesLeft--;
		if (capturedKey==target){
			reset();
			targetLetter();
			wins++;
			document.getElementById("winsID").innerHTML = wins;
		}

	}

	else{
		losses++;
		document.getElementById("lossesID").innerHTML = losses;
		reset();
	}
}



