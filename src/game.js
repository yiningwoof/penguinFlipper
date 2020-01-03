window.addEventListener('DOMContentLoaded', () => {
	const penguinsURL = 'http://localhost:3000/api/v1/penguins';
	// let penguinIds; // eight ids in random order
	const penguinURLs = [];

	const cards = document.querySelectorAll('.card');
	let clickCount = 0;
	let testMatch = [];
	let twoElements = [];
	let matchedIds = [];

	const cardIndices = [...Array(16).keys()];
	// const headerContainer = document.querySelector('.header-container');
	const row_begin_countdown = document.querySelector('.row-begin-countdown');
	const startButton = document.querySelector('#btn-start-game');
	startButton.addEventListener('click', startGame);

	async function startGame() {
		await assignPenguinsToCards();
		showAllCards();
	}

	function showAllCards() {
		flipCards();
		progressCountDown(5, 5);
		clickCountText = document.createElement('p');
		clickCountText.className = 'click-count';
		row_begin_countdown.appendChild(clickCountText);
		clickCountText.textContent = `Click Count: ${clickCount}`;
	}

	function flipCards() {
		cards.forEach((card) => card.classList.toggle('flip'));
	}

	function flip() {
		this.classList.toggle('flip');
		clickCount += 1;
		clickCountText = document.querySelector('.click-count');
		clickCountText.textContent = `Click Count: ${clickCount}`;
		currentCardPenguinId = this.getAttribute('penguin_id');
		twoElements.push(this);
		testMatch.push(currentCardPenguinId);
		timeOut1s = window.setTimeout(evaluateMatch, 1000);

		console.log(clickCount);
	}

	function evaluateMatch() {
		if (testMatch.length === 2) {
			if (testMatch[0] === testMatch[1]) {
				matchedIds.push(testMatch[0]);
				// twoMatches = document.querySelectorAll(
				// 	`[penguin_id='${testMatch[0]}']`
				// );

				twoElements.forEach((card) => card.remove());
				testMatch.splice(0, 2);
				twoElements.splice(0, 2);
				console.log(matchedIds);
			} else if (testMatch[0] !== testMatch[1]) {
				// noMatches = document.querySelectorAll(`[penguin_id='${testMatch[0]}']`);

				twoElements.forEach((card) => card.classList.toggle('flip'));
				testMatch.splice(0, 2);
				twoElements.splice(0, 2);
			}
		}
	}

	async function fetchEightPenguins() {
		const res = await fetch(penguinsURL);

		const json = await res.json();
		const penguinIds = selectEightPenguins(json);
		return penguinIds;
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
			card_front_face.parentNode.setAttribute('penguin_id', idURLs[i]['id']);
			card_front_face.setAttribute('src', idURLs[i]['url']);
		}
	}

	async function fetchEightImageURLs(penguinIds) {
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

	// FAITH

	// progressCountDown(
	// 	30,
	// 	'pageBeginCountdown',
	// 	'pageBeginCountdownText'
	// ).then((value) =>
	// 	alert(`game over! should pass function to shuffle new cards`)
	// );

	function progressCountDown(timeLeft, maxTime) {
		return new Promise((resolve) => {
			let timerDiv = document.getElementById('timer-bar');

			while (timerDiv.firstChild) {
				timerDiv.removeChild(timerDiv.firstChild);
			}

			let progressBar = document.createElement('progress');
			progressBar.max = maxTime;
			timerDiv.appendChild(progressBar);

			let timeText = document.createElement('p');
			timeText.innerHTML = `Timer ${timeLeft} seconds`;
			timerDiv.appendChild(timeText);

			var countdownTimer = setInterval(() => {
				timeLeft--;

				progressBar.value = timeLeft;
				timeText.innerHTML = `Timer ${timeLeft} seconds`;

				if (timeLeft < 1) {
					clearInterval(countdownTimer);
					flipCards();
					if (maxTime === 5) {
						timeOut1s = window.setTimeout(startMatching, 1000);
					}
					resolve(true);
				}
			}, 1000);
		});
	}

	function startMatching() {
		progressCountDown(30, 30);

		cards.forEach((card) => {
			card.addEventListener('click', flip);
		});

		if (clickCount === 50) {
			alert("toooooo many clicks! you're out!");
		}
	}
