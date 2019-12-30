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

	async function getRandomIdURLs() {
		const penguinIds = await fetchEightPenguins();
		const penguinURLs = await fetchEightImageURLs(penguinIds);
		const ids16 = penguinIds.concat(penguinIds);
		const urls16 = penguinURLs.concat(penguinURLs);
		const shuffled = shuffle(ids16);
		console.log(shuffled);
		const idURLs = [];
		shuffled.forEach(async (id) => {
			const pair = {};
			pair['id'] = id;
			pair['URL'] = await getOneImageURL(id);
			idURLs.push(pair);
		});
		console.log(idURLs);
		return idURLs;
	}

	function assignPenguinsToCards() {
		const idURLs = getRandomIdURLs();
		for (let i = 0; i < ids.length; i++) {
			console.log('work');
			let firstCardIndex = cardIndices[firstCardIndexIndex];
			let secondCardIndex = cardIndices[secondCardIndexIndex];
			let firstCard = cards[firstCardIndex];
			let secondCard = cards[secondCardIndex];
			// let firstIdIndex = cardIndices.indexOf(firstCardIndex);
			cardIndices.splice(firstCardIndex, 1);
			// let secondIdIndex = cardIndices.indexOf(secondCardIndex);
			cardIndices.splice(secondCardIndex, 1);
			console.log(penguinIds[i]);
			firstCard.setAttribute('penguin_id', idURLs.keys[i]);
			secondCard.setAttribute('penguin_id', idURLs.keys[i]);
			let first_front_image = firstCard.querySelector('img.front-face');
			first_front_image.setAttribute('src', idURLs[idURLs.keys[i]]);
			let second_front_image = secondCard.querySelector('img.front-face');
			second_front_image.setAttribute('src', idURLs[idURLs.keys[i]]);
			console.log(firstCard);
			console.log(secondCard);
		}
	}

	async function fetchEightImageURLs(penguinIds) {
		const penguinURLs = [];
		penguinIds.forEach(async (penguinId) => {
			const penguinURL = await getOneImageURL(penguinId);
			penguinURLs.push(penguinURL);
		});
		// console.log(idURLPairs);
		return penguinURLs;
	}

	async function getOneImageURL(penguinId) {
		const res = await fetch(
			`http://localhost:3000/api/v1/penguin_pictures/${penguinId}`
		);
		const json = await res.json();
		const imageArr = json['penguin_pics'];
		let i = Math.floor(Math.random() * imageArr.length);
		const imageURL = imageArr[i];
		return imageURL;
	}

	function shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	flipCard();

	// FAITH

	// FAITH
});
