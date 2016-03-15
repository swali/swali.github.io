
(function() {
	function initialize () {
		new Slider().initialize();
		new Nav().initialize();
		new Countdown().initialize();
		new MusicPlayer().initialize();
		new SlideIn().initialize();
	}

	document.addEventListener('DOMContentLoaded', function() {
		initialize();
	}, false);

})();