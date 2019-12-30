window.addEventListener('DOMContentLoaded', () => {
	const penguinsURL = 'http://localhost:3000/api/v1/penguins';
	// let penguinIds; // eight ids in random order
	const cards = document.querySelectorAll('.card');
	const cardIndices = [...Array(16).keys()];

	async function flipCard() {
		await assignPenguinsToCards();
		// console.log(document.querySelectorAll('.card'));

		cards.forEach((card) => {
			card.addEventListener('click', flip);
		});
	}

	function flip() {
		this.classList.toggle('flip');
	}

	async function fetchEightPenguins() {
		const res = await fetch(penguinsURL);

		const json = await res.json();
		const penguinIds = selectEightPenguins(json);
		return penguinIds;
		// return new Promise((resolve, reject) => {
		// 	fetch(penguinsURL)
		// 		.then((res) => res.json())
		// 		.then((json) => {
		// 			// console.log(selectEightPenguins(json));
		// 			penguinIds = selectEightPenguins(json);
		// 			// console.log(penguinIds);
		// 		});
		// 	const error = false;
		// 	if (!error) {
		// 		resolve();
		// 	} else {
		// 		reject('something went wrong!');
		// 	}
		// });
	}

	function selectEightPenguins(json) {
		let allIds = [];
		let eightIndices = [];

		json.forEach((penguin) => {
			allIds.push(penguin.id);
		});

		while (eightIndices.length < 8) {
			let r = Math.floor(Math.random() * allIds.length); // lowest 0, highest max index in allIds
			if (eightIndices.indexOf(r) === -1) eightIndices.push(r);
		}

		let eightIds = eightIndices.map((index) => allIds[index]);

		return eightIds;
	}

	async function assignPenguinsToCards() {
		const penguinIds = await fetchEightPenguins();
		console.log(penguinIds);

		penguinIds.forEach(async (penguinId) => {
			let imageURL = await getOnePenguinPicURL(penguinId);

			let firstCardIndexIndex = Math.floor(Math.random() * cardIndices.length);
			let secondCardIndexIndex = Math.floor(Math.random() * cardIndices.length);
			while (firstCardIndexIndex === secondCardIndexIndex) {
				secondCardIndexIndex = Math.floor(Math.random() * cardIndices.length);
			}
			let firstCardIndex = cardIndices[firstCardIndexIndex];
			let secondCardIndex = cardIndices[secondCardIndexIndex];

			let firstCard = cards[firstCardIndex];
			let secondCard = cards[secondCardIndex];

			// let firstIdIndex = cardIndices.indexOf(firstCardIndex);
			cardIndices.splice(firstCardIndex, 1);
			// let secondIdIndex = cardIndices.indexOf(secondCardIndex);
			cardIndices.splice(secondCardIndex, 1);
			console.log(penguinId);
			firstCard.setAttribute('penguin_id', penguinId);
			secondCard.setAttribute('penguin_id', penguinId);
			let first_front_image = firstCard.querySelector('img.front-face');
			first_front_image.setAttribute('src', imageURL);
			let second_front_image = secondCard.querySelector('img.front-face');
			second_front_image.setAttribute('src', imageURL);
			console.log(firstCard);
			console.log(secondCard);
		});
	}

	async function getOnePenguinPicURL(penguinId) {
		const res = await fetch(
			`http://localhost:3000/api/v1/penguin_pictures/${penguinId}`
		);
		const json = await res.json();
		const imageArr = json['penguin_pics'];
		let i = Math.floor(Math.random() * imageArr.length);
		const imageURL = imageArr[i];
		console.log(imageURL);
		return imageURL;
	}

	flipCard();

	// FAITH

	// FAITH
});
