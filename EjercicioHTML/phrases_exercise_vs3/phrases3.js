$(document).ready(function(){

	var nextPhraseId = 1;

	var firstPhrase = new Phrase(nextPhraseId, "This is a cool phrase");
	nextPhraseId += 1;

	var secondPhrase = new Phrase(nextPhraseId, "Another phrase");
	nextPhraseId += 1;

	var phrases = [
		firstPhrase, 
		secondPhrase, 
		new Phrase(nextPhraseId, "This should be another phrase")
	];
	nextPhraseId += 1;


	currentIndexSlideShow = 0;
	function updatePhrase() {
		var currentPhrase = phrases[currentIndexSlideShow];
		var titleElement = $('#phrase-title');
		titleElement.html(currentPhrase.name);
		currentIndexSlideShow = (currentIndexSlideShow + 1) % phrases.length
	}


	function placePhrases() {

		phrases.forEach(function (phrase, index){
			var phraseItemElement = phrase.putHTMLElement();
			$('ul.phrases-lists').append(phraseItemElement);

		});
	}

	function deletePhrase(event){
		//var $buttonClicked = $(event.currentTarget);
		var idToRemove = $(event.currentTarget).attr("data-index");
		var tempPhrases = phrases.filter(function (phrase) {
			return phrase.id != idToRemove;
		});
		phrases = tempPhrases;
		$(".phrases-lists").empty();
		placePhrases();
	}

	function addPhrase() {

		var inputText = $('#phrase-input').val();
		var newPhrase = new Phrase(nextPhraseId,inputText);
		nextPhraseId = nextPhraseId + 1;
		phrases.push(newPhrase);

		var indexNewPhrase = phrases.length -1;
		var phraseItemElement = newPhrase.putHTMLElement();
		$('ul.phrases-lists').append(phraseItemElement);
		$('#phrase-input').val('');
	}

	function changeApperance(){
		$newColorCheck = $(event.currentTarget);
		var $selectedPhrase = $newColorCheck.parent();	
		$selectedPhrase.toggleClass("background-task");
	}


	$('#add-phrase-button').on('click', addPhrase);
	$('#next-phrase-button').on('click', updatePhrase);

	placePhrases();
	updatePhrase();

	$('.phrases-lists').on('click',"button.remove-phrase", deletePhrase);
	$('.phrases-lists').on('change',".check-phrases", changeApperance);
});

