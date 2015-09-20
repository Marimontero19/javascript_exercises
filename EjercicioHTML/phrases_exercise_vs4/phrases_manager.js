var phrasesManager = function (){
	this.nextPhraseId = 1;
	this.phrases = [];
	this.thePhrases();
	this.currentIndexSlideShow = 0;
	this.setEventListeners();
}

phrasesManager.prototype.deletePhrase = function(event) {
	var idToRemove = $(event.currentTarget).attr("data-index");
	var tempPhrases = phrases.filter(function (phrase) {
			return phrase.id != idToRemove;
	});
	phrases = tempPhrases;
	$(".phrases-lists").empty();
	placePhrases();
};

phrasesManager.prototype.placePhrases = function(phrase, index) {
	var phraseItemElement = phrase.putHTMLElement();
	$('ul.phrases-lists').append(phraseItemElement);

};

phrasesManager.prototype.thePhrases = function () {
	this.addPhrase("This is a cool phrase");
	this.addPhrase("Another phrase");
	this.addPhrase("his should be another phrase");
};