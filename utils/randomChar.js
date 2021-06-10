export function randomChar(text, setText) {
	let intervalID = 0;
	let characters = [];
	let counter = 0;
	intervalID = setInterval(() => {
		for (let i = 0; i < text.length - counter + 1; i++) {
			if (text.length >= text.length - counter) {
				characters[counter] = text[counter];
			}
			characters[i + counter] = Math.random()
				.toString(32)
				.charAt(3)
				.toUpperCase();
		}
		counter++;

		setText(characters.join("").slice(0, -1));
		if (counter === text.length) {
			characters = [];
			counter = 0;
			clearInterval(intervalID);
		}
	}, 25);
}
