$(document).ready(function(){

	var currentIndexPhrase = 1;

	var firstPhrase = new Phrase(currentIndexPhrase, "This is a cool phrase");
	currentIndexPhrase += 1;

	var secondPhrase = new Phrase(currentIndexPhrase, "Another phrase");
	currentIndexPhrase += 1;

	var phrases = [
		firstPhrase, 
		secondPhrase, 
		new Phrase(currentIndexPhrase, "This should be another phrase")
	];

	currentIndexPhrase += 1;

	//function updatePhrase() {
	//	var titleElement = $('#phrase-title');
	//	titleElement.html(phrases[currentIndexPhrase]);
	//	currentIndexPhrase = (currentIndexPhrase + 1) % phrases.length
	//}


	function placePhrases() {

		phrases.forEach(function (phrase, index){
			var phraseItemElement = phrase.putHTMLElement();
			$('ul.phrases-lists').append(phraseItemElement);

		});
	}

	function deletePhrase(event){
		//var $buttonClicked = $(event.currentTarget)
		var idToRemove = $(event.currentTarget).attr("data-index");
		var tempPhrases = phrases.filter(function (phrase) {
			return phrase.id != idToRemove;
		});
		phrase = tempPhrases;
		$(".phrases-list").empty();
		placePhrases();
	}

	function addPhrase() {

		var inputText = $('#phrase-input').val();
		var newPhrase = new Phrase(currentIndexPhrase,inputText);
		currentIndexPhrase = currentIndexPhrase + 1;
		phrases.push(newPhrase);

		var indexNewPhrase = phrases.length -1;
		var phraseItemElement = newPhrase.putHTMLElement();
		$('ul.phrases-lists').append(phraseItemElement);
		$('#phrase-input').val('');
	}

	$('#next-phrase-button').on('click', updatePhrase);
	placePhrases();
	//updatePhrase();
	$('.phrases-lists').on('click',"button.remove-task", deletePhrase);
});

