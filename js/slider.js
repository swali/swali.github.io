function Slider () {
	var imageCount = 0,
		total = 6,
		sliderInterval;

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

	function initialize() {
		var leftArrow = document.getElementById("leftArrow");
		var rightArrow = document.getElementById("rightArrow");

		leftArrow.addEventListener("click", function() {
			slide(-1);
			stopSliderInterval();
		}, false);

		rightArrow.addEventListener("click", function() {
			slide(1);
			stopSliderInterval();
		}, false);

		createSliderImageContainers();

		sliderInterval = setInterval(function () {
			slide(1);
		}, 5000);
	}

	function stopSliderInterval () {
		clearInterval(sliderInterval);
	}

	function createSliderImageContainers () {
		var imageElement,
			sliderImagesContainer = document.querySelector("#sliderImagesContainer");

		for (var i = 0; i < total; i++) {
			imageElement = document.createElement("div");
			imageElement.className = "image";
			imageElement.style.backgroundImage = "url('images/slider/" + i + ".jpg')";
			sliderImagesContainer.appendChild(imageElement);
		}
	}

	return {
		initialize: initialize
	};
}