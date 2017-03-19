
var amountOfButtons = document.getElementById('activityList').getElementsByTagName('li')
timer = []
watch = []
toggleButtons = []


// watch = new Stopwatch(timer[i])

for (var i = 0; i < amountOfButtons.length; i++) {
	toggleButtons.push(document.getElementById('toggle' + [i]));
	timer.push(document.getElementById('timer' + i));
	
	watch.push(new Stopwatch(timer[i]))

	toggleButtons[i].addEventListener('click', function callStopwatch() {
		
		if (watch[i].isOn) {
			watch[i].stop();
		}
		else{
		watch[i].start();
		}	
	});
}






////////////////////////////////////////////////////////////////////////////////////

// var amountOfButtons = document.getElementById('activityList').getElementsByTagName('li')
// watch = []


// timer = [];
// for(var i = 0; i < activitiesLength; i++){
// 	timer.push(document.getElementById('timer' + i));
// }


// watch = []
// toggleButtons = []
// for (var i = 0; i < amountOfButtons.length; i++) {
// 	toggleButtons.push(document.getElementById('toggle' + [i]));
// 	watch.push(new Stopwatch(timer[i]))		
// }

// for(var i = 0; i < activitiesLength; i++){
// 	toggleButtons[i].addEventListener('click', function callStopwatch() {
		
// 		if (watch[i].isOn) {
// 			watch[i].stop();
// 		}
// 		else{
// 		watch[i].start();
// 		}	
// 	});
// }


////////////////////////////////////////////////////////////////////////////////////



// for(var i = 0; i < activitiesLength; i++){
// 	toggleButtons[i].addEventListener('click', function callStopwatch() {
		
// 		for (var i = 0; i < amountOfButtons.length; i++) {
// 			toggleButtons.push(document.getElementById('toggle' + [i]));
// 			watch.push(new Stopwatch(timer[i]))
		
// 				.then(watchCreated) => () {

// 					if (watch[i].isOn) {
// 					watch[i].stop();
// 					}
// 					else{
// 					watch[i].start();
// 					}
// 				}	
// 			}	
// 		}	
// 	});
// }



// var watch[i] = new Stopwatch(timer[i]);
// for (var i = 0; i < activitiesLength;)


// toggleButtons[i].addEventListener('click', function() {
// 	watch0.reset();
// })


// var woppa = function() {
// 	watch.push("Watch").this

// 	}
	
// for (var i = 0; i < amountOfButtons.length; i++) {
// 	amountOfButtons[i].addEventlistener('click', function woppa () {
// 		watch.push(amountOfButtons[i])
// 	})
// };




// for (var i = 0; i < amountOfButtons.length; i++) {
// 		toggleButtons.push(document.getElementById('toggle' + [i]));
// 	}




