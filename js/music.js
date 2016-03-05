function MusicPlayer() {
	
	var audioControl = document.querySelector("#music audio");
	audioControl.volume = 0.4;

	function initialize() {
		var audioContainer = document.getElementById("music");
		audioContainer.addEventListener("click", toggleMusic);
	}

	function toggleMusic() {
		if (!audioControl.paused) {
			audioControl.pause();
		} else {
			audioControl.play();
		}
	}

	return {
		initialize: initialize
	};
}