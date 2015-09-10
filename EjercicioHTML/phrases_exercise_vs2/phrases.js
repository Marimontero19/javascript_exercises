$(document).ready(function(){


	function getRamdomInt(min,max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var phrases = [
		"This is a cool phrase",
		"Another phrase",
		"This should be another phrase"
	];

	function updatePhrase() {

		var titleElement = $('#phrase-title');
		var ramdonIndex = getRamdomInt(0,2);
		titleElement.html(phrases[ramdonIndex]);
		//debugger
		//.html es un metodo de jquery que lo hacer es introdicir la informacion
		// dentro de los tags del html
	}


	$('#next-phrase-button').on('click', updatePhrase);

	function placePhrases() {

		//var phraseItemElement = $('<li>');
		//$('ul.phrases-lists').append(phraseItemElement);
		//debugger

		phrases.forEach(function (phrase){
			var phraseItemElement = $('<li>');
			phraseItemElement.html(phrase);
			$('ul.phrases-lists').append(phraseItemElement);
		});
	}


	placePhrases();
	updatePhrase();

});


