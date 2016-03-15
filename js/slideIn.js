function SlideIn() {
	var sections = document.querySelectorAll(".sectionContent"),
		comeInClassName = "come-in",
		comeOutClassName = "come-out";

	function initialize () {
		window.addEventListener("scroll", function() {
			slideIn();
		}, false);
	}

	function slideIn() {
		for (var i = 0; i < sections.length; i++) {
			slideInElement(sections[i]);
		}
	}

	function slideInElement(element) {
	    if (Utils.isVisible(element)) {
	    	Utils.removeClass(element, comeOutClassName);
	    	Utils.addClass(element, comeInClassName);
	    } else {
	    	Utils.removeClass(element, comeInClassName);
	    	Utils.addClass(element, comeOutClassName);
	    }
	}

	return {
		initialize: initialize
	};
}