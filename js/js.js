var row = 1;
var randomWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
console.log(randomWord);

function check(){
	var typedWord = document.getElementById("input").value.toUpperCase();
	/*var temp = randomWord;*/

	console.log(typedWord);
	for (i = 1; i <= randomWord.length; i++) {
		document.getElementById("R"+row+"L"+i).innerText = typedWord[i-1];
	}

	if (typedWord == randomWord) {

		alert("Gewonnen!");

	}

	for (i = 1; i <= randomWord.length; i++) {

		if (typedWord[i-1] == randomWord[i-1]) {
			document.getElementById("R"+row+"L"+i).style.backgroundColor = "red";
			randomWord[i-1] = "*"
			console.log(randomWord);
		}
	}

	row++
}