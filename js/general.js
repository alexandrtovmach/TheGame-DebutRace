function keys() {
	var redCar = document.getElementsByClassName('redcar')[0];
	var road = document.getElementsByClassName('road')[0];
	document.addEventListener('keydown', function (event) {
		redCar.style.transitionDuration = null;
		if (event.keyCode == 37) {
			event.preventDefault();
			// redCar.style.transform = 'skew(15deg) rotateZ(-10deg)';
			if (!redCar.classList.contains("left")) {
				redCar.classList.add("left_press");
				setTimeout(() => {
					redCar.classList.remove("right");
					redCar.classList.remove("left_press");
					redCar.classList.add("left");
				}, 200);
			}
		} else if (event.keyCode == 38) {
			event.preventDefault();
			redCar.classList.add("accelerate_press");
			road.style.animationDuration = "5s";
		} else if (event.keyCode == 39) {
			event.preventDefault();
			// redCar.style.transform = 'skew(-15deg) rotateZ(10deg)';
			if (!redCar.classList.contains("right")) {
				redCar.classList.add("right_press");
				setTimeout(() => {
					redCar.classList.remove("left");
					redCar.classList.remove("right_press");
					redCar.classList.add("right");
				}, 200);
			}
		} else if (event.keyCode == 40) {
			event.preventDefault();
			redCar.classList.add("break_press");
			road.style.animationDuration = "20s";
		}
	})
	document.addEventListener('keyup', function (event) {
		// redCar.style.transitionDuration = '2s';
		// redCar.style.transitionTimingFunction = 'easy-in'
		if (event.keyCode == 38) {
			redCar.classList.remove("accelerate_press");
			road.style.animationDuration = null;
			// redCar.style.left = 'calc(50% - 15% - 0.5*300px)';
			// redCar.style.transform = 'skew(-15deg) rotateZ(5deg)';
		} else if (event.keyCode == 40) {
			redCar.classList.remove("break_press");
			road.style.animationDuration = null;
			// redCar.style.left = 'calc(50% + 15% - 0.5*300px)';
			// redCar.style.transform = 'skew(15deg) rotateZ(-5deg)';
		}
	})
}