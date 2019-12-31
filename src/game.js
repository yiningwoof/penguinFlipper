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
		penguinIds.forEach((penguinId) => {
			let imageURL = getOnePenguinPicURL(penguinId);

			firstCardIndex = Math.floor(Math.random() * cardIndices.length);
			secondCardIndex = Math.floor(Math.random() * cardIndices.length);
			while (firstCardIndex === secondCardIndex) {
				secondCardIndex = Math.floor(Math.random() * 16);
			}
			firstCard = cards[firstCardIndex];
			secondCard = cards[secondCardIndex];
			let firstIdIndex = cardIndices.indexOf(firstCardIndex);
			if (firstIdIndex !== -1) cardIndices.splice(firstIdIndex, 1);
			let secondIdIndex = cardIndices.indexOf(secondCardIndex);
			if (secondIdIndex !== -1) cardIndices.splice(secondIdIndex, 1);

			firstCard.setAttribute('penguin_id', penguinId);
			secondCard.setAttribute('penguin_id', penguinId);
			let front_image = firstCard.querySelector('img.front-face');
			front_image.setAttribute('src', imageURL);
			console.log(firstCard);
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
		console.log(typeof imageURL);
		return imageURL;
	}

	flipCard();

	// FAITH

	ProgressCountdown(5, 'pageBeginCountdown', 'pageBeginCountdownText')
	.then(value => alert(`game over! should pass function to shuffle new cards`));

	function ProgressCountdown(timeleft, bar, text) {
	  return new Promise((resolve) => {
		var countdownTimer = setInterval(() => {
		  timeleft--;
	
		  document.getElementById(bar).value = timeleft;
		  document.getElementById(text).textContent = timeleft;
	
		  if (timeleft < 0) {
			clearInterval(countdownTimer); 
			resolve(true);
		  }
		}, 1000);
	  });
	}



// 	// FAITH
		
});
