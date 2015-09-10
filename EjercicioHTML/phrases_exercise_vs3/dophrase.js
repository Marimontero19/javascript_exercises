var Phrase = function(id,name){
	this.id = id;
	this.name = name;
}

Phrase.prototype.putHTMLElement = function (){
		var phraseItemElement = $('<li>');

		var $checkBox = $('<input>').addClass('check-phrases');
		$checkBox.attr('type', 'checkbox');
		phraseItemElement.append($checkBox);

		/*phraseItemElement.html(this.name);*/
		phraseItemElement.append(this.name);
		var $deletePhraseButton = $('<button>').addClass('tiny remove-phrase').html('delete');
		$deletePhraseButton.attr("data-index", this.id);
		phraseItemElement.append($deletePhraseButton);

		return phraseItemElement;


}