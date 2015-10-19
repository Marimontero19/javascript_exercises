// Write a method that takes in a string. Your method should return the
// most common letter in the array, and a count of how many times it
// appears.

function most_common_letter(string) {

	var most_letter = 0;
	var letterCount = {};//objeto en js

	for (var i = 0; i < string.length; i++){
		var letter = string[i];
		if(letterCount[letter] === undefined){
			letterCount[letter] = 1;
		} else {
			letterCount[letter] += 1; // letterCount[letter] = letterCount[letter] + 1;
		}
	}

	console.log(letterCount);

	var max_letter = '';
	var max_letter_count = 0;
	for (var l in letterCount) {
		if (letterCount[l] > max_letter_count){
			max_letter = l;
			max_letter_count = letterCount[l];
		}
	}

	//console.log(max_letter); 
	//console.log(max_letter_count);

	var obj_result = {};
	obj_result[max_letter] = max_letter_count;
	console.log(obj_result);

	var arr_result = [max_letter, max_letter_count]
	console.log(arr_result)
	return obj_result.toString()


}

console.log(most_common_letter('barcelona') == {a: 2}.toString());


