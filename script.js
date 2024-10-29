function showConfetti() {
	var count = 200;
	var defaults = {
		origin: { y: 0.7 }
	};

	function fire(particleRatio, opts) {
		confetti({
			...defaults,
			...opts,
			particleCount: Math.floor(count * particleRatio)
		});
	}

	fire(0.25, {
		spread: 26,
		startVelocity: 55,
	});
	fire(0.2, {
		spread: 60,
	});
	fire(0.35, {
		spread: 100,
		decay: 0.91,
		scalar: 0.8
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92,
		scalar: 1.2
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 45,
	});
}

function addMessage(msg) {
	const item = document.createElement('p');
	item.textContent = msg;
	document.getElementById('messages').appendChild(item);
	window.scrollTo(0, document.body.scrollHeight);
}

function showPumpkin() {
	document.getElementById('pumpkin-container').className = "shown"
	setInterval(() => {
		document.getElementById('pumpkin-container').className = ""
	}, 2000)
}

function setColor(hex) {
	document.body.style.backgroundColor = hex;
	document.getElementById('color').value = hex;
}