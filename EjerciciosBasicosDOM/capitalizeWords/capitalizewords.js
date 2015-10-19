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
	debugger
}
console.log('hola');

