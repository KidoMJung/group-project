
function Stopwatch(elem) {
	
//is een private variable die toegankleijk is voor watch terijl de scope loacl is. 
// dit is omdat watch een objevt is waar het onderstaande teogang tot heeft
	var time = 0
	var interval;
	var offset;

//private funtions

	function update(){
		console.log(this)
		if (this.isOn) {
			time += delta();
		}
		var formattedTime = timeFormatter(time)
		elem.textContent = formattedTime;
	}
	function delta() {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}
	function timeFormatter(timeInMilliseconds){
		var time = new Date(timeInMilliseconds); //alleen local
		var hours = (time.getHours()-1).toString();
		var minutes = time.getMinutes().toString();



		if (hours.length < 2) {
			hours = '0' + hours;
		}

		if (minutes.length < 2) {
			minutes = '0' + minutes;
		}


		return hours + ' : ' + minutes

	}

	this.isOn = false;
	this.start = function() {
		if(!this.isOn){
			interval = setInterval(update.bind(this), 10) //niet var omdat hij anders niet global interval update
			offset = Date.now();
			this.isOn = true;
		}
	};
	this.stop = function() {
		if(this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isON = false;
		}
	};
	this.reset= function() {
		if (!this.isOn){
		time = 0;
		update();
		}
	};
}


// var watch = new Stopwatch();


