
// Create rule for clicking button



// Function for loading NPC dialogue and player dialogue options
function nextLine(input, input2) {

document.getElementById("dialogue").innerHTML = input;
document.getElementById("button").innerHTML = input2;
runDialogue();
}

// Function to input dialogue
function proceed(input1, input2) {
	document.getElementById("button").addEventListener('click', () => {nextLine(input1, input2)});
}

function runDialogue() {
	if (document.getElementById('button').innerHTML === "I've lived here all my life.") {
		proceed('Oh really? Then you must know Mr. Bowler.', 'Mr. Bowler is a good friend of mine!');
	};

	if (document.getElementById('button2').innerHTML === 'I came from Newton.') {
		proceed('Newton, eh? I heard there\'s trouble brewing down there.', 'I haven\'t heard about any trouble.');
	}

	if (document.getElementById('button').innerHTML === 'Mr. Bowler is a good friend of mine!') {
		proceed('You liar! There aint no Mr.Bowler, I made him up!', 'Oh...');
		console.log('Mr. Bowler');
	};
}

runDialogue();