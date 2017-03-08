var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle')
var resetBtn = document.getElementById('reset')

console.log(timer)

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', function () {
	if (watch.isOn) {
		watch.stop();
		toggleBtn.textContent = "Start"
	}else{
	watch.start();
	toggleBtn.textContent = "Stop"
	}
});

resetBtn.addEventListener('click', function() {
	watch.reset();
})


console.log('hi')