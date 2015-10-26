// Write a method that takes in a string of lowercase letters and
// spaces, producing a new string that capitalizes the first letter of
// each word.
//
// You'll want to use the `split` and `join` methods. Also, the String
// method `upcase`, which converts a string to all upper case will be
// helpful.

$(document).on('ready',capitalize_words);

function capitalize_words(string) {
	$('#container').html('<input type="text" id="text-input">');
	$('#container').append('<button class="submit-button">Submit</button>');
	$('.submit-button').on('click',putSentence);
}

function putSentence(){
	var $putParagraph = $('<p>');
	$('#container').append($putParagraph);
	var inputSentence = $('#text-input').val();
	var newSentence = capitalizeWords(inputSentence);
	$putParagraph.append(newSentence);
}

function capitalizeWords(writtenSentence){
	
	var arrayWords = writtenSentence.split(" ");
	var newArray = [];

	arrayWords.forEach(function(word){
		newArray.push(capitalizeFirstLetter(word));
	});
	
	return newArray.join(" ");
}

function capitalizeFirstLetter(word) {

	var firstLetter = word[0].toUpperCase();
	var otherLetters = word.substr(1); //Esconde el valor que le ponga entre (), creando nuevo string
	var newWord = firstLetter + otherLetters;
	return newWord;
}

