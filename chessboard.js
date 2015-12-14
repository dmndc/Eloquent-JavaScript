// My solution

var size = process.argv[2] || 8;
var line = "";

for (var i = 0; line.length < size; i++) {
	line += " ";
	line += "#";
}

for (var n = 0; n < size; n++) {
	if (n % 2 === 0) {
		console.log(line.split('').reverse().join(''));
	} else {
		console.log(line);
	}
}



// Official solution

/*

var size = process.argv[2] || 8;
var board = "";

for (var y = 0; y < size; y++) {
	for (var x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}

console.log(board);

*/
