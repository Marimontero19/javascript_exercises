// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.

$(document).on('ready',time_conversion);

function time_conversion(minutes) {
	$('#container').html('<input type="number" id="numbers-input">');
	$('#container').append('<button class="submit-button">Submit</button>');
	$('.submit-button').on('click',introTime);
}

function introTime(){
	var $formatTime = $('<p>');
	$('#container').append($formatTime);
	var inputMinutes = $('#numbers-input').val();
	var changeMinutes = convertTime(inputMinutes);
	$formatTime.append(changeMinutes);
}

function convertTime(minutes){
	var number =  minutes / 60;
	var hour = Math.floor(number);
	var minutesLeft = minutes - (hour*60);
	var newString = hour + "hr " + minutesLeft + "min";

	return newString;
}


time_conversion(75)// "1h 15min"
time_conversion(270)// "4h 70min"
