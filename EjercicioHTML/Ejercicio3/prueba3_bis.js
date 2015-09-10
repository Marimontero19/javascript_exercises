// Write a method that takes in a string of lowercase letters and
// spaces, producing a new string that capitalizes the first letter of
// each word.
//
// You'll want to use the `split` and `join` methods. Also, the String
// method `upcase`, which converts a string to all upper case will be
// helpful.

function capitalize_words(string) {

	var words = string.split(' ');

	return words.map(function (word){
		var letters = word.split('');
		letters[0] = letters[0].toUpperCase();
		return letters.join('');
	}).join(' ');
}


console.log(capitalize_words("hello matt"));

var arr = [1, 4, 7, 10];
var newArr = arr.map(function (num) {
	return num + 1;
})

// console.log(newArr);

//words.forEach(function (word){
//		word.charAt(0).toUpperCase();
//		console.log(word);
//	});
//	words.join(' ');
//	return words;


