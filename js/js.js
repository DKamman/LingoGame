var row = 1;
var randomWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
console.log(randomWord);

document.getElementById("R1L1").innerText = randomWord[0];

function check(){
	var typedWord = document.getElementById("input").value.toUpperCase();
	var temp = randomWord.split("");
	var temp2 = typedWord.split("");

	for (i = 1; i <= randomWord.length; i++) {
		document.getElementById("R"+row+"L"+i).innerText = typedWord[i-1];
	}

	if (typedWord == randomWord) {
		alert("Gewonnen!");
		location.reload();

	}

	for (i = 1; i <= temp.length; i++) {

		if (temp2[i-1] == temp[i-1]) {
			document.getElementById("R"+row+"L"+i).style.backgroundColor = "red";
			temp[i-1] = "*"
			temp2[i-1] = "$"
			console.log(randomWord);
		}
	}

//	console.table(temp)
//console.log(temp.length)
	for (i = 1; i <= temp.length; i++) {
		//console.log(temp.indexOf(temp2[i-1]))
		console.log(temp, temp2[i-1]);
		if (temp.indexOf(temp2[i-1]) != -1){
			//temp[i-1] = "*"
			//console.log("geel" + temp2[i]);
			document.getElementById("R"+row+"L"+i).style.backgroundColor = "yellow";
		}
	}

	console.table(temp)
	row++
}