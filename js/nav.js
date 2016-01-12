function Nav () {
	function controlNavigationShadow() {
	    if (document.body.scrollTop > 0) {
	        document.getElementById("nav").className = "active";
	    } else {
	        document.getElementById("nav").className = "";
	    }
	}

	function initialize () {
		window.addEventListener("scroll", function() {
			controlNavigationShadow();
		}, false);
	}

	return {
		initialize: initialize
	};
}