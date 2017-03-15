var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle')

console.log('timer')
console.log(timer)

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', function () {
	if (watch.isOn) {
		watch.stop();
	}else{
	watch.start();
	}
});

toggleBtn.addEventListener('click', function() {
	watch.reset();
})


console.log('hi')