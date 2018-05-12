
// Create rule for clicking button
var buttons = [];
var numberOfButtons = document.getElementsByClassName('button').length;
var button = document.getElementsByClassName('button');
var endMessage = "End of game. Return to beginning?";

function rollDie() {
	console.log( Math.floor(Math.random * 6) + 1);
}

function generateParagraphTag(words) {
	return `<p class="button">${words}</p>`;
}

function generateImage(photo) {
	return `<img src="${photo}" height="200" width="200">`;
}

// Function for loading NPC dialogue and player dialogue options
function nextLine(input, input2, input3) {
	var html = '';
	html += generateImage(input3);
	for (i=0; i < input2.length; i++) {
	
		html += generateParagraphTag(input2[i]);
	}

	document.getElementById("dialogue").innerHTML = input;
	document.getElementById("playerOptions").innerHTML = html;
	runDialogue();
}

// Function to input dialogue
function proceed(input1, input2, j, input3) {
	document.getElementsByClassName('button')[j].addEventListener('click', () => {nextLine(input1, input2, input3)});
}

function runDialogue() {
	for (var j=0; j < numberOfButtons; j++) {
		if (button[j].innerHTML === "I've lived here all my life.") {
			buttons = ['Mr. Bowler is a good friend of mine!', 'Who?'];
			proceed('Oh really? Then you must know Mr. Bowler.', buttons, j, 'jpg/1.jpg');
		} else if (button[j].innerHTML === "I came here from Newton.") {
			buttons = ['I haven\'t heard about any trouble.', 'Did I say Newton? I\'m actually from Springville'];
			proceed('Newton, eh? I heard there\'s trouble brewing down there.', buttons, j, 'jpg/Newton.png');
		} else if (button[j].innerHTML === "Mr. Bowler is a good friend of mine!") {
			buttons = [endMessage];
			proceed('You liar! There ain\'t no Mr. Bowler, I made him up!', buttons, j, 'jpg/Liar.jpg');
		} else if (button[j].innerHTML === "Who?") {
			buttons = [endMessage];
			proceed('Don\'t you worry about it. Say, do you have something to eat? I\'m starving.', buttons, j, 'jpg/Mr. Bowler.jpg');
		} else if (button[j].innerHTML === 'I haven\'t heard about any trouble.') {
			buttons = [endMessage];
			proceed('Don\'t you worry about it. Say, do you have something to eat? I\'m starving.', buttons, j, 'jpg/Mr. Bowler.jpg');
		} else if (button[j].innerHTML === 'Did I say Newton? I\'m actually from Springville') {
			buttons = ['Mr. Bowler is a good friend of mine!', 'Who?'];
			proceed('Oh really? Then you must know Mr. Bowler.', buttons, j, 'jpg/1.jpg');
		} else if (button[j].innerHTML === endMessage) {
			buttons = ['I\'ve lived here all my life.', 'I came here from Newton.'];
			proceed('You don\'t look like you\'re from around here.', buttons, j, "jpg/Suspicious.jpg");
			document.getElementsByClassName('button').classList.add('endstate');
		} else {
			break;
		};
	}

	// if (document.getElementById('button2').innerHTML === 'I came from Newton.') {
	// 	proceed('Newton, eh? I heard there\'s trouble brewing down there.', 'I haven\'t heard about any trouble.');
	// }

	// if (document.getElementById('button').innerHTML === 'Mr. Bowler is a good friend of mine!') {
	// 	proceed('You liar! There aint no Mr.Bowler, I made him up!', 'Oh...');
	// 	console.log('Mr. Bowler');
	// };
}

runDialogue();