var turn;
var output;
var guesses;
var plausible;
resetGame();

var alphabet = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97).split("");
alphabet.forEach(makeButton);

function makeButton(item,index){
	var butt = document.createElement("button");
	butt.innerHTML = item;
	butt.setAttribute("class","keyboard_button");
	butt.setAttribute("onClick","takeTurn('"+item+"')")
	document.getElementById("keyboard_section").appendChild(butt);
}

function takeTurn(guess){
	if(turn >= 7){return;}
	if(guess == 'a'){
		output = output.substring(0,2) + "a" + output.substring(3);
	}else if(guess == 'y'){
		output = output.substring(0,4) + "y";
	}else if(plausible.includes(guess)){
		plausible = plausible.filter(function(a){return a!=guess;});
		turn++;
	}else{
		turn++;
	}
	guesses = guesses + guess + " ";
	if(turn >=7){
		var correct = plausible[Math.floor(Math.random() * plausible.length)];
		correct = correct + " a y"
		output = correct;
	}
    updateOutput();
}

function resetGame() {
    turn = 0;
	output = "_ _ _";
	plausible = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','w'];
	guesses = "Guesses: ";
	updateOutput();
}
function updateOutput(){
	var image_file = "images/Hangman "+turn+".bmp";
	document.getElementById("status_image").src = image_file;
	document.getElementById("output").innerHTML = output;
	document.getElementById("guesses").innerHTML = guesses;
}