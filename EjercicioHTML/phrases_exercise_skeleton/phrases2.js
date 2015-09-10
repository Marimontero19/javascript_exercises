$(document).ready(function(){


	//function getRamdomInt(min,max) {
	//	return Math.floor(Math.random() * (max - min + 1)) + min;
	//}

	var phrases = [
		"This is a cool phrase",
		"Another phrase",
		"This should be another phrase"
	];

	var currentIndexPhrase = 0;

	function updatePhrase() {

		var titleElement = $('#phrase-title');
		titleElement.html(phrases[currentIndexPhrase]);
		currentIndexPhrase = (currentIndexPhrase + 1) % phrases.length


		// currentIndexPhrase = currentIndexPhrase + 1; 
		// if (currentIndexPhrase == phrases.length){ 
		// 	currentIndexPhrase = 0;
		// }

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
			var $deletePhraseButton = $('<button>').addClass('tiny remove-phrase').html('delete');
			phraseItemElement.append($deletePhraseButton);
			$('ul.phrases-lists').append(phraseItemElement);
		
		});
	}

	$('#add-phrase-button').on('click',addPhrase);

	$('.phrases-lists').on('click', '.remove-phrase', function() {
    	$(this).closest('li').remove();
	});

	//function deletePhrase(){
	//	$(this).closest('li').remove();
	//}
	//$('.remove-phrase').on('click',deletePhrase);

	function addPhrase() {

		var inputText = $('#phrase-input').val();
		phrases.push(inputText);
		var phraseItemElement = $('<li>');
		phraseItemElement.html(inputText);
		$('ul.phrases-lists').append(phraseItemElement);
		$('#phrase-input').val('');
	}

	placePhrases();
	updatePhrase();

});

//Tarea(eliminar frases iniciales)

//Anadir boton en el for each
//Anadir una clase al boton de remove
//on clic con nuevo metodo en la clase anteior
//metodo nuevo que elimina la frase del array y del html







