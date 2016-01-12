
(function() {
	function initialize () {
		new Slider().initialize();
		new Nav().initialize();
	}

	document.addEventListener('DOMContentLoaded', function() {
		initialize();
	}, false);

})();