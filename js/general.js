function keys() {
	var redCar = document.getElementsByClassName('redcar')[0];
	document.addEventListener('keydown', function (event) {
		redCar.style.transitionDuration = null;
		if (event.keyCode == 37) {
			event.preventDefault();
			redCar.style.transform = 'skew(15deg) rotateZ(-10deg)';
		} else if (event.keyCode == 38) {
			event.preventDefault();
		} else if (event.keyCode == 39) {
			event.preventDefault();
			redCar.style.transform = 'skew(-15deg) rotateZ(10deg)';
		} else if (event.keyCode == 40) {
			event.preventDefault();
		}
	})
	document.addEventListener('keyup', function (event) {
		redCar.style.transitionDuration = '2s';
		redCar.style.transitionTimingFunction = 'easy-in'
		if (event.keyCode == 37) {
			redCar.style.left = 'calc(50% - 15% - 0.5*300px)';
			redCar.style.transform = 'skew(-15deg) rotateZ(5deg)';
		} else if (event.keyCode == 39) {
			redCar.style.left = 'calc(50% + 15% - 0.5*300px)';
			redCar.style.transform = 'skew(15deg) rotateZ(-5deg)';
		}
	})
}