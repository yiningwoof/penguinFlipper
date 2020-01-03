window.addEventListener('DOMContentLoaded', () => {
	const penguinsURL = 'http://localhost:3000/api/v1/penguins';
	// let penguinIds; // eight ids in random order
	const penguinIdURLs = {};
	const penguinInfo = {};

	const cards = document.querySelectorAll('.card');
	let clickCount = 0;
	let timerText = 0;
	let score = 0;
	let testMatch = [];
	let twoElements = [];
	let matchedIds = [];

	let faceDown = true;

	const cardIndices = [...Array(16).keys()];
	// const headerContainer = document.querySelector('.header-container');
	const rowBeginCountdown = document.querySelector('.row-begin-countdown');
	const startButton = document.querySelector('#btn-start-game');
	const newGameButton = document.querySelector('#btn-new-game');
	const matchedContainer = document.querySelector('.matched-container');

	startButton.addEventListener('click', startGame);
	newGameButton.addEventListener('click', startGame)

	async function startGame() {
		await assignPenguinsToCards();
		showAllCards();
	}

	function showAllCards() {
		flipCards();
		progressCountDown(5, 5);
		if (document.querySelector('.click-count')) {
			document.querySelector('.click-count').remove();
		}
		clickCountText = document.createElement('p');
		clickCountText.className = 'click-count';
		rowBeginCountdown.appendChild(clickCountText);
		clickCountText.textContent = `Click Count: ${clickCount}`;
	}

	function flipCards() {
		faceDown = !faceDown;
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
	}

	function evaluateMatch() {
		if (testMatch.length === 2) {
			if (testMatch[0] === testMatch[1]) {
				matchedIds.push(testMatch[0]);
				twoElements.forEach((card) => card.remove());
				if (document.querySelectorAll(".card").length === 0) {
					timerText = document.querySelector('progress').value;
					score = calculateScore(matchedIds.length, timerText, clickCount);
					while (rowBeginCountdown.firstChild) {
						rowBeginCountdown.removeChild(rowBeginCountdown.firstChild);
					}
					let scoreText = document.createElement('h1');
					scoreText.className = 'score-text';
					scoreText.textContent = `Your score is: ${score}!`;

					let timerElement = document.createElement('h3');
					timerElement.textContent = `Time left: ${timerText} seconds`;

					let matchesElement = document.createElement('h3');
					matchesElement.textContent = `Total matches: ${matchedIds.length}`;

					let clickCountElement = document.createElement('h3');
					clickCountElement.textContent = `Total mouse clicks: ${clickCount}`;
					
					rowBeginCountdown.appendChild(timerElement);
					rowBeginCountdown.appendChild(matchesElement);
					rowBeginCountdown.appendChild(clickCountElement);
					rowBeginCountdown.appendChild(scoreText);
				}

				let newMatch = document.createElement('div');
				let newMatchImage = document.createElement('img');
				newMatchImage.setAttribute('src', penguinIdURLs[testMatch[0]]);
				newMatchImage.height = 100;
				newMatchImage.width = 100;
				newMatch.appendChild(newMatchImage);

				let newMatchSpecies = document.createElement('a');
				newMatchSpecies.innerText = penguinInfo[testMatch[0]]['species'];
				newMatchSpecies.href = penguinInfo[testMatch[0]]['link'];
				newMatch.appendChild(newMatchSpecies);

				let newMatchDesc = document.createElement('p');
				newMatchDesc.textContent = penguinInfo[testMatch[0]]['description'];
				newMatch.appendChild(newMatchDesc);
				newMatch.className = 'matched-card';
				matchedContainer.appendChild(newMatch);
				testMatch.splice(0, 2);
				twoElements.splice(0, 2);
				// console.log(matchedIds);
			} else if (testMatch[0] !== testMatch[1]) {
				// noMatches = document.querySelectorAll(`[penguin_id='${testMatch[0]}']`);

				twoElements.forEach((card) => card.classList.toggle('flip'));
				testMatch.splice(0, 2);
				twoElements.splice(0, 2);
			}
		}
	}

	function calculateScore(matches, timeLeft, clicks) {
		score = 10 * (10 * matches + timeLeft - clicks);
		return score;
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
			penguinInfo[penguin.id] = penguin;
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
		let idURLs8 = [];
		for (let i = 0; i < penguinIds.length; i++) {
			pair = {};
			pair['id'] = penguinIds[i];
			pair['url'] = await getOneImageURL(penguinIds[i]);
			idURLs8.push(pair);
			// idURLPairs[penguinIds[i]] = pair['url'];
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
		// let penguinURLs = {};
		for (let i = 0; i < penguinIds.length; i++) {
			const penguinURL = await getOneImageURL(penguinIds[i]);
			penguinIdURLs[penguinIds[i]] = penguinURL;
		}
		return penguinIdURLs;
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
						timeOut1s = window.setTimeout(startMatching, 500);
					}
					if (maxTime === 30) {
						if (score === 0) {
							score = calculateScore(matchedIds.length, 0, clickCount);
							alert("Time is up!")
							cards.forEach((card) => card.removeEventListener('click', flip));
							while (rowBeginCountdown.firstChild) {
								rowBeginCountdown.removeChild(rowBeginCountdown.firstChild);
							}
							let scoreText = document.createElement('h1');
							scoreText.className = 'score-text';
							scoreText.textContent = `Your score is: ${score}!`;
							rowBeginCountdown.appendChild(scoreText);

							let timerElement = document.createElement('h3');
							timerElement.textContent = `Time left: ${timerText} s`;
		
							let matchesElement = document.createElement('h3');
							matchesElement.textContent = `Total matches: ${matchedIds.length}`;
		
							let clickCountElement = document.createElement('h3');
							clickCountElement.textContent = `Total mouse clicks: ${clickCount}`;
							
							rowBeginCountdown.appendChild(timerElement);
							rowBeginCountdown.appendChild(matchesElement);
							rowBeginCountdown.appendChild(clickCountElement);
							rowBeginCountdown.appendChild(scoreText);
						}
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
