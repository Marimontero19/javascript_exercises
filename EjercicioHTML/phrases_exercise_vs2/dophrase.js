var Phrase = function(id,name){
	this.id = id;
	this.name = name;
}

Phrase.prototype.putHTMLElement = function (){
		var phraseItemElement = $('<li>');
		phraseItemElement.html(this.id + this.name);
		var $deletePhraseButton = $('<button>').addClass('tiny remove-phrase').html('delete');
		$deletePhraseButton.attr("data-index", this.id);
		phraseItemElement.append($deletePhraseButton);

		return phraseItemElement;


}