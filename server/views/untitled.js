var timer0 = document.getElementById('timer0');
var timer1 = document.getElementById('timer1');
var toggleBtn0 = document.getElementById('toggle' + 0)
var toggleBtn1 = document.getElementById('toggle' + 1)


var watch0 = new Stopwatch(timer0);

var watch1 = new Stopwatch(timer1);

toggleBtn0.addEventListener('click', function () {
	if (watch0.isOn) {
		watch0.stop();
	}else{
	watch0.start();
	}
});

toggleBtn0.addEventListener('click', function() {
	watch0.reset();
})


toggleBtn1.addEventListener('click', function () {
	if (watch1.isOn) {
		watch1.stop();
	}else{
	watch1.start();
	}
});

toggleBtn1.addEventListener('click', function() {
	watch1.reset();
})



console.log('hi')