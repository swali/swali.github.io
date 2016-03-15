var Utils = {
	isVisible: function(element, buffer) {
		var rect = element.getBoundingClientRect(),
			elementTop = rect.top,
			elementBottom = rect.bottom;
		
		if (buffer == undefined) {
			buffer = Math.min(rect.height * 0.3, window.innerHeight * 0.15);
		}

		return (elementTop + buffer <= window.innerHeight) && (elementBottom - buffer >= 0);
	},
	hasClass: function(element, name) {
		var classes = element.className.split(" ");
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].trim() == name) {
				return true;
			}
		}

		return false;
	},
	addClass: function (element, name) {
		if (!this.hasClass(element, name)) {
			element.className += " " + name;
		}
	},
	removeClass: function(element, name) {
		var className = element.className,
			classes = className.split(" "),
			newClassName = "";

		for (var i = 0; i < classes.length; i++) {
			var classI = classes[i];
			if (classI.length > 0 && classI.trim() != name) {
				newClassName += classI.trim() + " ";
			}
		}

		element.className = newClassName;
	}
}