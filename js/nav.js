function Nav () {
	function controlNavigationShadow() {
	    if (document.body.scrollTop > 0) {
	        document.getElementById("nav").className = "active";
	    } else {
	        document.getElementById("nav").className = "";
	    }
	}

	function underlineLink() {
		var prevActive = document.querySelector(".activeLink");
		if (prevActive) prevActive.classList.remove("activeLink");
		this.classList.add("activeLink");
	}

	function controlCurrentNav() {
		var sections = document.querySelectorAll(".sectionContent"),
			nav = document.querySelector("#nav"),
				windowPos = window.pageYOffset,
				navHeight = nav.offsetHeight + 60,
				//subtract extra 70px overflow padding-top and add 20px top/bottom section padding
				sliderContainerHeight = document.querySelector("#sliderContainer").offsetHeight, 
				aboutUsHeight = document.querySelector("#story").offsetHeight - 70 + 40,
			    proposalHeight = document.querySelector("#proposal").offsetHeight - 70 + 40,
			    eventsHeight = document.querySelector("#events").offsetHeight - 70 + 40,
			    firstSection = sliderContainerHeight,
			    secondSection = aboutUsHeight + sliderContainerHeight,
			    thirdSection = proposalHeight + aboutUsHeight + sliderContainerHeight,
			    fourthSection = eventsHeight + proposalHeight + aboutUsHeight + sliderContainerHeight;
		    
		    if (windowPos < firstSection - navHeight) {
		    	var prevActive = document.querySelector(".activeLink");
				if (prevActive) prevActive.classList.remove("activeLink");
				return;
		    }
			if (windowPos > (fourthSection - navHeight)) {
				underlineLink.call(document.querySelector("a[href='#people']"));
			}
			else if (windowPos > (thirdSection - navHeight)) {
				underlineLink.call(document.querySelector("a[href='#events']"));
			}
			else if (windowPos > secondSection - navHeight) {
				underlineLink.call(document.querySelector("a[href='#proposal']"));
			}
				else if (windowPos > (firstSection - navHeight)) {
				underlineLink.call(document.querySelector("a[href='#story']"));
			}
	}

	function initialize () {
		window.addEventListener("scroll", function() {
			controlNavigationShadow();
			controlCurrentNav.call(this);
		}, false);
		var links = document.querySelectorAll("#nav a");
		for(var i = 0; i < links.length; i++) {
			var link = links[i];
			link.addEventListener("click", function() {
				underlineLink.call(this);
			}, false);
		}
	}

	return {
		initialize: initialize
	};
}