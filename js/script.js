
(function() {
	var imageCount = 1;
	var total = 4;

	//run this everytime arrow is clicked
	function slide(x) {
		var image;

		if ((imageCount + x) < 1 || (imageCount + x) > total) return;
		image = document.getElementById("image");
		imageCount = imageCount + x;
		document.querySelector("#sliderContainer #image").style.backgroundImage = "url('images/slider/" + imageCount + ".jpg')"
	}

	document.addEventListener('DOMContentLoaded', function() {
		var leftArrow = document.getElementById("leftArrow");
		var rightArrow = document.getElementById("rightArrow");

		leftArrow.addEventListener("click", function() {
			slide(-1);
		}, false);

		rightArrow.addEventListener("click", function() {
			slide(1);
		}, false);


	}, false);
})();