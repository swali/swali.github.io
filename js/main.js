
(function() {
	function initialize () {
		new Slider().initialize();
		new Nav().initialize();
		new Countdown().initialize();
	}

	document.addEventListener('DOMContentLoaded', function() {
		initialize();
	}, false);

})();