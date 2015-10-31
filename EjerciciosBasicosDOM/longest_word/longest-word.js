// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.

$(document).on('ready',longestWord_cont);

function longestWord_cont(words) {
	$('#container').html('<input type="text" id="text-input">');
	$('#container').append('<button class="submit-button">Submit</button>');
	$('.submit-button').on('click', putSentence);
}

function putSentence(){
	var $sentence = $('<p>');
	$('#container').append($sentence);
	var inputSentence = $('#text-input').val();
	var word = longestWord(inputSentence);
	$sentence.append(word);
}

function longestWord(writtenSentence){
	
	var words = writtenSentence.split(" ");
	var longestWord = ''

	words.forEach(function(word){
		if (word.length > longestWord.length){
			longestWord = word
		}
	});
	return longestWord
}

//function clearInput(sentence){
//	$('input:text').click(
  //  function(){
  //     $(sentence).val('');
  //  });
//}


