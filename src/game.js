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
		const idURLs8 = [];
		for (let i = 0; i < penguinIds.length; i++) {
			const pair = {};
			pair['id'] = penguinIds[i];
			pair['url'] = await getOneImageURL(penguinIds[i]);
			idURLs8.push(pair);
		}
		const idURLs16 = idURLs8.concat(idURLs8);
		const shuffled = shuffle(idURLs16);
		return shuffled;
	}

	async function assignPenguinsToCards() {
		const idURLs = await getRandomIdURLs();
		for (let i = 0; i < idURLs.length; i++) {
			const card_front_face = cards[i].querySelector('img.front-face');
			card_front_face.setAttribute('penguin_id', idURLs[i]['id']);
			card_front_face.setAttribute('src', idURLs[i]['url']);
			console.log(cards[i]);
		}
	}

	async function fetchEightImageURLs(penguinIds) {
		const penguinURLs = [];
		for (let i = 0; i < penguinIds.length; i++) {
			const penguinURL = await getOneImageURL(penguinIds[i]);
			penguinURLs.push(penguinURL);
		}
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
