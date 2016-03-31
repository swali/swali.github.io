function MusicPlayer() {
	
	var audioControl = document.querySelector("#music audio"),
		audioContainer = document.getElementById("music");
	
	audioControl.volume = 0.4;

	function initialize() {
		audioContainer.addEventListener("click", toggleMusic);
	}

	function toggleMusic() {
		if (!audioControl.paused) {
			audioControl.pause();
			audioContainer.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
		} else {
			audioControl.play();
			audioContainer.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
		}
	}

	return {
		initialize: initialize
	};
}