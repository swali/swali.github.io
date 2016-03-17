function Slider () {
	var images = [],
		imageCount = 5,
		sliderInterval = null,
		sliderImagesContainer = document.querySelector("#sliderImagesContainer");

	// run this everytime arrow is clicked
	function slide(direction) {
		if (direction > 0) {
			var temp = images[0];
			temp.style.zIndex = -1;
			temp.style.left = ((imageCount - 2) * 100) + "vw";

			for (var i = 0; i < imageCount - 1; i++) {
				images[i] = images[i + 1];
				images[i].style.removeProperty('z-index');
				images[i].style.left = ((i - 1) * 100) + "vw";
			}

			images[imageCount - 1] = temp;
		} else {
			var temp = images[imageCount - 1];
			temp.style.zIndex = -1;
			temp.style.left = "-100vw";

			for (var i = imageCount - 1; i > 0; i--) {
				images[i] = images[i - 1];
				images[i].style.removeProperty('z-index');
				images[i].style.left = ((i - 1) * 100) + "vw";
			}

			images[0] = temp;
		}
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
		for (var i = -1; i < imageCount - 1; i++) {
			images.push(addImage(i));
		}
	}

	function addImage(index) {
		var imageElement = document.createElement("div");
		imageElement.className = "image";
		imageElement.style.backgroundImage = "url('images/slider/" + fixIndex(index) + ".jpg')";
		imageElement.style.position = "absolute";
		imageElement.style.left = (100 * index) + "vw";
		
		sliderImagesContainer.appendChild(imageElement);

		return imageElement;
	}

	function fixIndex(index) {
		if (index < 0) {
			index += imageCount;
		} else if (index >= imageCount) {
			index -= imageCount;
		}

		return index;
	}

	return {
		initialize: initialize
	};
}