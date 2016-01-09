
(function() {
	var imageCount = 0,
		total = 6,
		interval;

	function controlNavigationShadow() {
	    if (document.body.scrollTop > 0) {
	        document.getElementById("nav").className = "active";
	    } else {
	        document.getElementById("nav").className = "";
	    }
	}

	//run this everytime arrow is clicked
	function slide(x) {
		imageCount = imageCount + x;
		if (imageCount < 0) {
			imageCount = total - 1;
		} else if (imageCount >= total) {
			imageCount = 0;
		}

		document.getElementById("sliderImagesContainer").style.left = "-" + (100 * (imageCount)) + "vw";
	}

	function initializeSlider () {
		var leftArrow = document.getElementById("leftArrow");
		var rightArrow = document.getElementById("rightArrow");

		leftArrow.addEventListener("click", function() {
			slide(-1);
			stopTimer();
		}, false);

		rightArrow.addEventListener("click", function() {
			slide(1);
			stopTimer();
		}, false);

		createSliderImageContainers();

		interval = setInterval(function () {
			slide(1);
		}, 5000)
	}

	function stopTimer () {
		clearInterval(interval);
	}

	function createSliderImageContainers () {
		var imageElement,
			sliderImagesContainer = document.querySelector("#sliderImagesContainer");

		for (var i = 0; i < total; i++) {
			imageElement = document.createElement("div");
			imageElement.className = "image";
			imageElement.style.backgroundImage = "url('images/slider/" + i + ".jpg')";

			sliderImagesContainer.appendChild(imageElement);
		};
	}

	document.addEventListener('DOMContentLoaded', function() {
		initializeSlider();
	}, false);
	window.addEventListener("scroll", function() {
		controlNavigationShadow();
	}, false);
})();