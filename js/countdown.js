function Countdown () {
	function initialize () {
		setCounters();


		setInterval(setCounters, 1000);
	}

	function setCounters () {
		var currentDate = new Date(),
			weddingDate = new Date("Jul 13 2016 14:30 EDT"),
			diff = weddingDate - currentDate,
			seconds = (diff / 1000) | 0,
			secondsLeft = seconds % 60,
			minutes = (seconds / 60) | 0,
			minutesLeft = minutes % 60,
			hours = (minutes / 60) | 0,
			hoursLeft = hours % 24,
			days = (hours / 24) | 0;

		document.getElementById("countdownSecondsCounter").innerHTML = secondsLeft;
		document.getElementById("countdownMinutesCounter").innerHTML = minutesLeft;
		document.getElementById("countdownHoursCounter").innerHTML = hoursLeft;
		document.getElementById("countdownDaysCounter").innerHTML = days;
	}

	return {
		initialize: initialize
	};
}