
(function() {
	function initialize () {
		new Slider().initialize();
		new Nav().initialize();
		new Countdown().initialize();
		new MusicPlayer().initialize();
	}

	document.addEventListener('DOMContentLoaded', function() {
		initialize();
	}, false);

})();